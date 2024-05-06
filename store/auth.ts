import { defineStore } from 'pinia'

interface UserPayloadInterface {
  username: string
  password: string
}

interface UserDetails {
  id: string
  username: string
  expiry: number
  admin: boolean
  accounts_admin: boolean
  disabled: boolean
  email: {
    value: string
    enabled: boolean
  }
  has_referrals: boolean
}

interface ReferralDetails {
  code: string
  remaining_uses: number
  no_limit: boolean
  expiry: number
  use_expiry: boolean
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    userDetails: [],
    referralDetails: [],
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
        await this.fetchUserDetails(token.value)
        await this.fetchReferralDetails(token.value)
      }
    },
    async fetchUserDetails(token: string) {
      const apiUrl = useRuntimeConfig().public.JFA_URL

      const { data }: any = await useFetch(`${apiUrl}my/details`, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (data.value) {
        this.userDetails = data.value
      }
    },
    async fetchReferralDetails(token: string) {
      const apiUrl = useRuntimeConfig().public.JFA_URL

      const { data }: any = await useFetch(`${apiUrl}my/referral`, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (data.value) {
        this.referralDetails = data.value
      }
    },
    logUserOut() {
      const token = useCookie('token') // useCookie new hook in nuxt 3
      this.authenticated = false // set authenticated  state value to false
      token.value = null // clear the token cookie
      this.userDetails = null
      this.referralDetails = null
    }
  },
  persist: true
})
