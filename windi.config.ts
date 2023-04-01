import { defineConfig } from 'windicss/helpers'
// themes
import defaultTheme from 'windicss/defaultTheme'

export default defineConfig({
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './content/**/*.md',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
    ],
  },
  theme: {
    extend: {
      colors: {
        backg: '#111828',
        forg: '#202938',
        yellow: '#f4cf44',
        yellowf: '#897931',
        blueBorder: '#2E5597',
        bluer: '#007aff',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'login-pattern': "url('./assets/AuthBG.png')",
      },
    },
  },
})