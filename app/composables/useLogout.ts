import { useAuth } from '@/composables/useAuth'

export function useLogout() {
  const toast = useToast()
  const { logout, fetch } = useAuth()

  return async function logoutAndRedirect() {
    const success = await logout()
    if (!success) {
      toast.add({ title: 'Logout failed', color: 'red' })
      return
    }
    toast.add({ title: 'Logged out', color: 'green' })
    await fetch()
    await navigateTo('/auth/login')
  }
}
