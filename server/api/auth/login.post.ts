// server/api/login.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { Username, Pw } = body

  const jellyfin = useNitroApp().jellyfin

  const servers = await jellyfin.discovery.getRecommendedServerCandidates('https://play.gbstreams.com')
  const best = jellyfin.discovery.findBestServer(servers)

  const api = jellyfin.createApi(best.address)

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
