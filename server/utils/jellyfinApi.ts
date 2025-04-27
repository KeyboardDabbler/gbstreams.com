import { Jellyfin } from '@jellyfin/sdk'

export async function getJellyfinApiFromSession(event: any) {
  const session = await getUserSession(event)
  if (!session?.user?.id || !session?.user?.accessToken) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const { deviceName, deviceId, accessToken, id } = session.user
  const serverUrl = useNitroApp().jellyfinServerUrl

  const jellyfin = new Jellyfin({
    clientInfo: {
      name: 'GBStreams-com',
      version: '1.0.0'
    },
    deviceInfo: {
      name: deviceName,
      id: deviceId
    }
  })
  const api = jellyfin.createApi(serverUrl)
  api.accessToken = accessToken
  api.userId = id
  api.axiosInstance.defaults.headers.common['X-Emby-Token'] = accessToken

  return api
}
