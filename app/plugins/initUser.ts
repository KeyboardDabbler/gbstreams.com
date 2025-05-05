export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore()
  const { loggedIn } = useUserSession()
  watchEffect(async () => {
    if (loggedIn.value) {
      const { data } = await useFetch('/api/me')
      if (data.value) userStore.setUser(data.value)
    } else {
      userStore.clearUser()
    }
  })
})
