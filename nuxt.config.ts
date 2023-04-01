// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-windicss',
        'nuxt-headlessui',
        'nuxt-icon',
        '@nuxt/image-edge',
      ],
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
