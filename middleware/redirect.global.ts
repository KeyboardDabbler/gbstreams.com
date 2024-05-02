export default defineNuxtRouteMiddleware((to) => {
  switch (to.path) {
    case '/docs':
      return navigateTo('/dashboard/docs/introduction')
  }
})
