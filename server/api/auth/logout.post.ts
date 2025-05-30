export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (session?.user?.accessToken) {
    const api = await getJellyfinApiFromSession(event)
    try {
      await api.logout()
    } catch (error) {
      console.error('Error logging out from Jellyfin:', error)
    }
  }
  await clearUserSession(event)
  return { success: true }
})
