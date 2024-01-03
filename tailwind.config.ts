import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js}',
    './composables/**/*.{js,ts}',
    './content/**/*.md',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        backg: '#111828',
        forg: '#202938',
        yellowbg: '#f4cf44',
        yellowfg: '#897931',
        blueBorder: '#2E5597',
        bluer: '#007aff',
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'login-pattern': "url('./assets/AuthBG.png')",
      },
    },
  },
}
