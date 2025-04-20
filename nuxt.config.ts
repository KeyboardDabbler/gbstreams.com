// https://nuxt.com/docs/api/configuration/nuxt-config
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui-pro',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    'nuxt-nodemailer',
    '@nuxt/scripts',
    '@nuxtjs/turnstile',
    'nuxt-auth-utils'
  ],

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  content: {
    navigation: {
      fields: ['icon']
    },
    highlight: {
      preload: [
        'c',
        'cpp',
        'java'
      ],
      // Theme used in all color schemes.
      theme: 'github-dark'
    },
    // documentDriven: true,
    markdown: {
      toc: {
        depth: 4,
        searchDepth: 4
      }
    }
  },

  ui: {
    colorMode: false
  },

  runtimeConfig: {
    apiSecret: {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS,
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL
    },
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    rollupConfig: {
      plugins: [vue()]
    }
  },

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

  turnstile: {
    siteKey: process.env.NUXT_TURNSTILE_SITE_KEY,
    addValidateEndpoint: true
  }
})
