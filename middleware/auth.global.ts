import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore())
  const token = useCookie('token')

  if (token.value) {
    authenticated.value = true
  }

  // Define an array of routes that should redirect to /dashboard/profile
  const allowedRoutes = ['/', '/auth/login', '/auth/request', '/auth/signup']

  if (token.value && allowedRoutes.includes(to.path)) {
    return navigateTo('/dashboard/profile')
  }

  // If token doesn't exist and the current route is neither the root nor /auth/login, redirect to login
  if (!token.value && !allowedRoutes.includes(to.path)) {
    abortNavigation()
    return navigateTo('/auth/login')
  }
})
