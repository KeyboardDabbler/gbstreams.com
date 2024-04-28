export default defineAppConfig({
  ui: {
    primary: 'yellow',
    gray: 'slate',
    icons: {
      dynamic: true
    },
    header: {
      wrapper: 'border-b dark:border-gray-400 dark:border-opacity-40'
    },
    footer: {
      bottom: {
        wrapper: 'border-t dark:border-gray-400 dark:border-opacity-40 container m-auto'
      }
    }
  }
})
