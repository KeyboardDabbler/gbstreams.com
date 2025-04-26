// /server/api/jellyfin/image/[id]/[type].ts
import { Buffer } from 'node:buffer'

export default defineEventHandler(async (event) => {
  const { id, type } = event.context.params
  const query = getQuery(event)
  const session = await getUserSession(event)
  if (!session?.user?.accessToken) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })

  const jellyfinBase = 'https://play.gbstreams.com'
  const params = new URLSearchParams(query as Record<string, string>)
  if (!params.has('format')) params.set('format', 'Webp')
  if (!params.has('quality')) params.set('quality', '90')
  const url = `${jellyfinBase}/Items/${id}/Images/${type}?${params.toString()}`

  try {
    const res = await $fetch.raw(url, {
      headers: {
        'X-Emby-Token': session.user.accessToken
      },
      responseType: 'arrayBuffer'
    })

    if (res.status !== 200) {
      throw createError({ statusCode: res.status, message: 'Jellyfin image fetch failed' })
    }

    setResponseHeader(event, 'Content-Type', res.headers.get('content-type') || 'image/webp')
    // Return as Buffer for binary data
    return Buffer.from(res._data)
  } catch (e) {
    console.error('Jellyfin image proxy error:', e)
    throw createError({ statusCode: 404, message: 'Image not found' })
  }
})
