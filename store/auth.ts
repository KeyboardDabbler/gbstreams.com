import { defineStore } from 'pinia'

interface UserPayloadInterface {
  username: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      const apiUrl = useRuntimeConfig().public.JFA_URL

      const { data, pending }: any = await useFetch(`${apiUrl}my/token/login`, {
        method: 'get',
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}` // assuming the server expects Basic Auth
        }
      })
      this.loading = pending

      if (data.value) {
        console.log(data)
        const token = useCookie('token') // useCookie new hook in nuxt 3
        token.value = data?.value?.token // set token to cookie
        this.authenticated = true // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie('token') // useCookie new hook in nuxt 3
      this.authenticated = false // set authenticated  state value to false
      token.value = null // clear the token cookie
    }
  },
  persist: true
})
