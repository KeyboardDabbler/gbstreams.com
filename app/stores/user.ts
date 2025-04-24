import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null as string | null,
    name: '',
    email: '',
    avatarUrl: '',
    bio: '',
  }),
  actions: {
    setUser(user: any) {
      this.id = user.id
      this.name = user.userName
      this.email = user.email
      this.avatarUrl = user.avatarUrl
      this.bio = user.bio
    },
    clearUser() {
      this.$reset()
    }
  }
})
