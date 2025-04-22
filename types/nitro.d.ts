// types/nitro.d.ts
import type { Jellyfin } from '@jellyfin/sdk';

declare module 'nitropack' {
  interface NitroApp {
    jellyfin: Jellyfin
  }
}
