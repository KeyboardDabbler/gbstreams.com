// server/api/login.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { Username, Pw } = body

  const api = useNitroApp().jellyfinApi

  try {
    const auth = await api.authenticateUserByName(Username, Pw)

    await setUserSession(event, {
      user: {
        id: auth.data.User.Id,
        name: auth.data.User.Name,
        accessToken: api.accessToken
      },
      loggedInAt: Date.now()
    })
    return { success: true }
  } catch (e) {
    return { success: false, error: 'Invalid credentials' }
  }
})
