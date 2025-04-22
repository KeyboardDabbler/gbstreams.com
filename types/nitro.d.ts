// types/nitro.d.ts
import type { Api } from '@jellyfin/sdk'

declare module 'nitropack' {
  interface NitroApp {
    jellyfinApi: Api
  }
}
