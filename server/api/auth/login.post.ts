// server/api/login.post.ts
import { syncJellyfinUser } from '~/server/utils/syncJellyfinUser'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { Username, Pw } = body

  const api = useNitroApp().jellyfinApi

  try {
    const auth = await api.authenticateUserByName(Username, Pw)
    const jellyfinUser = auth.data.User
    const accessToken = api.accessToken

    await syncJellyfinUser(jellyfinUser)

    await setUserSession(event, {
      user: {
        id: jellyfinUser.Id,
        name: jellyfinUser.Name,
        accessToken: accessToken
      },
      loggedInAt: Date.now()
    })
    return { success: true }
  } catch (e) {
    return { success: false, error: 'Invalid credentials' }
  }
})
