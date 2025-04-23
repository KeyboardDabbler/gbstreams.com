export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (session?.user?.accessToken) {
    const api = useNitroApp().jellyfinApi
    try {
      await 
    } catch (e) {
      console.error('Error logging out from Jellyfin:', e)
    }
  }
  await clearUserSession(event)
  return { success: true }
})
