// server/api/login.post.ts
import { syncJellyfinUser } from '~/server/utils/syncJellyfinUser'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { Username, Pw, Remember } = body

  const api = useNitroApp().jellyfinApi

  try {
    const auth = await api.authenticateUserByName(Username, Pw)
    const jellyfinUser = auth.data.User
    const accessToken = api.accessToken

    await syncJellyfinUser(jellyfinUser)

    const sessionOptions = Remember
      ? { maxAge: 60 * 60 * 24 * 7 }
      : undefined

    await setUserSession(event, {
      user: {
        id: jellyfinUser.Id,
        name: jellyfinUser.Name,
        accessToken: accessToken
      },
      loggedInAt: Date.now()
    }, sessionOptions)
    return { success: true }
  } catch (e) {
    return { success: false, error: 'Invalid credentials' }
  }
})
