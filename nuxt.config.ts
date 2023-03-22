// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-windicss',
        'nuxt-icon',
      ],
      css: [
        '@/resources/main.css',
        '@/resources/scrollbars.css',
      ],
      content: {
        // https://content.nuxtjs.org/api/configuration
      }

})
