export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore()
  const { loggedIn } = useUserSession()
  if (loggedIn.value) {
    const { data } = await useFetch('/api/me')
    if (data.value) userStore.setUser(data.value)
  }
})
