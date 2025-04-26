import { UserLibraryApi } from '@jellyfin/sdk/lib/generated-client'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id || !session.user.accessToken) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const userId = session.user.id

  const jellyfinApi = useNitroApp().jellyfinApi
  if (!jellyfinApi) {
    throw createError({ statusCode: 500, message: 'Jellyfin API not available' })
  }

  // Set the access token for this request
  jellyfinApi.accessToken = session.user.accessToken
  // Set the X-Emby-Token header for the axios instance
  jellyfinApi.axiosInstance.defaults.headers['X-Emby-Token'] = session.user.accessToken

  const userLibraryApi = new UserLibraryApi(undefined, jellyfinApi.basePath, jellyfinApi.axiosInstance)

  const { data: items } = await userLibraryApi.getLatestMedia({
    userId,
    includeItemTypes: ['Movie', 'Series', 'Episode'],
    limit: 20,
    enableImages: true
  })

  return items
})
