export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { Username, Pw, Remember } = body
  const api = useNitroApp().jellyfinApi

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
        accessToken: accessToken
      },
      loggedInAt: Date.now()
    }, sessionOptions)
    return { success: true }
  } catch (e) {
    console.error('Login handler error:', e)
    return { success: false, error: 'Invalid credentials' }
  }
})
