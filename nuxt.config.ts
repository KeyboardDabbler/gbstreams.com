// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-windicss',
      ],
      css: [
        '@/resources/main.scss',
        '@/resources/scrollbars.css',
      ],
      content: {
        // https://content.nuxtjs.org/api/configuration
      }

})
