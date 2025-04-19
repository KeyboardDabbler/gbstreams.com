export default defineAppConfig({
  // https://ui3.nuxt.dev/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'blue',
      secondary: 'yellow',
      neutral: 'slate'
    }
  },
  uiPro: {
    error: {
      slots: {
        root: 'min-h-[calc(90vh-var(--ui-header-height))] flex flex-col items-center justify-center text-center',
        statusCode: 'text-base font-semibold text-[var(--ui-primary)]',
        statusMessage: 'mt-2 text-4xl sm:text-5xl font-bold text-white text-balance',
        message: 'mt-4 text-lg text-[var(--ui-text-muted)] text-balance',
        links: 'mt-8 flex items-center justify-center gap-6'
      }
    },
    header: {
      slots: {
        root: 'bg-backg border-b-1 border-gray-400 border-opacity-40 sticky top-0 z-50',
        container: 'flex items-center justify-between gap-3 h-[var(--ui-header-height)]',
        left: 'lg:flex-1 flex items-center gap-1.5',
        center: 'hidden lg:flex',
        right: 'flex items-center justify-end lg:flex-1 gap-1.5',
        title: 'shrink-0 font-bold text-xl text-[var(--ui-text-highlighted)] flex items-end gap-1.5',
        toggle: 'lg:hidden',
        content: 'lg:hidden',
        overlay: 'lg:hidden',
        header: '',
        body: 'p-4 sm:p-6 overflow-y-auto'
      },
      variants: {
        toggleSide: {
          left: {
            toggle: '-ms-1.5'
          },
          right: {
            toggle: '-me-1.5'
          }
        }
      }
    }
  }
})