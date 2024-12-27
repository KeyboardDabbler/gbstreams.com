// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui-pro", "@nuxt/eslint", '@nuxt/image'],
  css: ['~/assets/css/main.css'],

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './assets/icons'
    }]
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dpub6gcei/image/upload/v1678918300/GBstreams',
      modifiers: {
        quality: 'auto:best',
        dpr: 'auto',
      },
    }
  },

  future: {
    compatibilityVersion: 4
  },

  ui: {
    colorMode: false
  },

  compatibilityDate: "2024-11-27",

  typescript: {
    typeCheck: false,
    strict: false
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
})