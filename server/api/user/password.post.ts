import { getJellyfinApiFromSession } from '../../utils/jellyfinApi'
import { UserApi } from '@jellyfin/sdk/lib/generated-client'

export default defineEventHandler(async (event) => {
  const api = await getJellyfinApiFromSession(event)
  const body = await readBody(event)
  const { current, new: newPassword } = body
  console.log('Received password update request:', { userId: api.userId, current, newPassword })
  try {
    // Use UserApi to update the user's password
    const userApi = new UserApi(undefined, api.basePath, api.axiosInstance)
    await userApi.updateUserPassword({
      userId: api.userId,
      updateUserPassword: {
        CurrentPw: current,
        NewPw: newPassword
      }
    })
    await clearUserSession(event)
    console.log('Password update successful for user:', api.userId)
    return { success: true }
  } catch (e) {
    console.error('Password update failed:', e)
    return { success: false, error: 'Password update failed' }
  }
})
