// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/ui-pro', '@nuxt/image', '@vueuse/nuxt', '@nuxt/eslint'],

  devtools: {
    enabled: true
  },

  css: [
    '@/resources/main.css',
    '@/resources/scrollbars.css',
  ],
  
  ui: {
    colorMode: false
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

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
        dpr: 'auto'
      }
    }
  },

  content: {
    navigation: {
      fields: ['icon'],
    },
    highlight: {
      preload: [
        'c',
        'cpp',
        'java',
      ],
      // Theme used in all color schemes.
      theme: 'github-dark',
    },
    // documentDriven: true,
    markdown: {
      toc: {
        depth: 4,
        searchDepth: 4,
      },
    },
  },
})