export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore()
  const { loggedIn } = useUserSession()

  watch(loggedIn, async (isLoggedIn) => {
    if (isLoggedIn) {
      const { data } = await useFetch('/api/me')
      if (data.value) userStore.setUser(data.value)
    } else {
      userStore.clearUser()
    }
  }, { immediate: true })
})
