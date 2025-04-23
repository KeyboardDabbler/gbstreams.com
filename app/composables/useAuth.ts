export function useAuth() {
  const { user, loggedIn, clear, fetch } = useUserSession()

  async function logout() {
    const { data, error } = await useFetch('/api/auth/logout', { method: 'POST' })
    if (!error.value && data.value?.success) {
      clear()
      return true
    }
    return false
  }

  return { user, loggedIn, clear, fetch, logout }
}
