import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useAuth()
  const publicPaths = ['/', '/auth/login', '/auth/request', '/auth/signup']

  if (!loggedIn.value && !publicPaths.includes(to.path)) {
    return navigateTo('/auth/login')
  }

  if (loggedIn.value && publicPaths.includes(to.path)) {
    return navigateTo('/dashboard')
  }
})
