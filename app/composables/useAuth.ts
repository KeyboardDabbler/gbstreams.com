export function useAuth() {
  const { user, loggedIn, clear, fetch } = useUserSession()
  return { user, loggedIn, clear, fetch }
}
