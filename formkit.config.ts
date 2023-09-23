import { defineFormKitConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import formkitTheme from './formkit.theme'

export default defineFormKitConfig({
    icons: {
        ...genesisIcons,
      },
      config: {
        classes: generateClasses(formkitTheme),
      },
})