export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (session?.user?.accessToken) {
    const api = useNitroApp().jellyfinApi
    try {
      await api.logout()
    } catch (e) {
      // Optionally log error
    }
  }
  await clearUserSession(event)
  return { success: true }
})