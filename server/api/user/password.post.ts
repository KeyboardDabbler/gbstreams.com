import { getJellyfinApiFromSession } from '../../utils/jellyfinApi'

export default defineEventHandler(async (event) => {
  const api = await getJellyfinApiFromSession(event)
  const body = await readBody(event)
  const { current, new: newPassword } = body
  try {
    await api.updateUserPassword(api.userId, {
      CurrentPw: current,
      NewPw: newPassword
    })
    await clearUserSession(event)
    return { success: true }
  } catch (e) {
    return { success: false, error: 'Password update failed' }
  }
})
