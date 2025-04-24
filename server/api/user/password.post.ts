export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id || !session?.user?.accessToken) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const body = await readBody(event)
  const { current, new: newPassword } = body

  const api = useNitroApp().jellyfinApi
  api.accessToken = session.user.accessToken

  try {
    await api.updateUserPassword(session.user.id, {
      CurrentPw: current,
      NewPw: newPassword
    })
    await clearUserSession(event)
    return { success: true }
  } catch (e) {
    return { success: false, error: 'Password update failed' }
  }
})
