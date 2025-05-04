import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null as string | null,
    userName: '',
    email: '',
    avatar: '',
    bio: '',
    deviceName: '' as string,
    deviceId: '' as string,
    isAdmin: false,
    isDisabled: false,
    paymentRole: 'Free'
  }),
  actions: {
    setUser(user: any) {
      this.id = user.id
      this.userName = user.userName
      this.email = user.email
      this.avatar = user.avatar
      this.bio = user.bio
      this.deviceName = user.deviceName || ''
      this.deviceId = user.deviceId || ''
      this.isAdmin = user.isAdmin || false
      this.isDisabled = user.isDisabled || false
      this.paymentRole = user.paymentRole || 'Free'
    },
    clearUser() {
      this.$reset()
    }
  }
})
