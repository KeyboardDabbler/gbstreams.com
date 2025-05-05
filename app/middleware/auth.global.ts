import { useAuth } from '~/composables/useAuth'
import { useUserStore } from '@/stores/user'

export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useAuth()
  const userStore = useUserStore()
  const publicPaths = ['/', '/auth/login', '/auth/request', '/auth/signup']

  if (!loggedIn.value && !publicPaths.includes(to.path)) {
    return navigateTo('/auth/login')
  }

  if (loggedIn.value && publicPaths.includes(to.path)) {
    return navigateTo('/dashboard')
  }

  // Restrict admin routes to admins only
  if (to.path.startsWith('/dashboard/admin') && !userStore.isAdmin) {
    return navigateTo('/dashboard')
  }
})
