// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxt/content',
    'nuxt-windicss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@formkit/nuxt',
    "@nuxt/image"
  ],
  build: {
    transpile: ['jsonwebtoken']
  },
  auth: {
    isEnabled: true,
    provider: {
      type: 'local',
      endpoints: {
        getSession: { path: '/user' }
      },
      pages: {
        login: '/auth/login'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken'
      },
      sessionDataType: { id: 'string', email: 'string', name: 'string', role: 'admin | guest | account', subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]" }
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: false,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: false,
    },
    globalAppMiddleware: {
      isEnabled: true
    }
  },
  css: [
    '@/resources/main.css',
    '@/resources/scrollbars.css',
  ],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dpub6gcei/image/upload/v1678918300/GBstreams',
      modifiers: {
        quality: 'auto:best',
        dpr: 'auto',
      },
    }
  },
  headlessui: {
    prefix: 'Headless',
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