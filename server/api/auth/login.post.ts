import { Jellyfin } from '@jellyfin/sdk'
import { getUserPaymentRole } from '../../utils/syncJellyfinUser'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { Username, Pw, Remember, deviceName, deviceId } = body
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

  try {
    const auth = await api.authenticateUserByName(Username, Pw)
    const jellyfinUser = auth.data.User
    const accessToken = api.accessToken

    console.log('Jellyfin access token issued', accessToken)

    await syncJellyfinUser(jellyfinUser)

    console.log('syncJellyfinUser succeeded')

    const sessionOptions = Remember
      ? { maxAge: 60 * 60 * 24 * 7 }
      : undefined

    await setUserSession(event, {
      user: {
        id: jellyfinUser.Id,
        userName: jellyfinUser.Name,
        accessToken: accessToken,
        deviceName,
        deviceId,
        isAdmin: !!jellyfinUser.Policy?.IsAdministrator,
        isDisabled: !!jellyfinUser.Policy?.IsDisabled,
        paymentRole: (await getUserPaymentRole(String(jellyfinUser.Id))) || 'Free'
      },
      loggedInAt: Date.now()
    }, sessionOptions)
    return { success: true }
  } catch (e) {
    console.error('Login handler error:', e)
    return { success: false, error: 'Invalid credentials' }
  }
})
