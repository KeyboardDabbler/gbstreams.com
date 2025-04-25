import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null as string | null,
    userName: '',
    email: '',
    avatar: '',
    bio: ''
  }),
  actions: {
    setUser(user: any) {
      this.id = user.id
      this.userName = user.userName
      this.email = user.email
      this.avatar = user.avatar
      this.bio = user.bio
    },
    clearUser() {
      this.$reset()
    }
  }
})
