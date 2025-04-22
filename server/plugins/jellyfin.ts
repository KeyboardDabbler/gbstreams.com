// server/plugins/jellyfin.ts
import { Jellyfin } from '@jellyfin/sdk'

export default defineNitroPlugin((nitroApp) => {
  const jellyfin = new Jellyfin({
    clientInfo: {
      name: 'GBStreams-com',
      version: '1.0.0'
    },
    deviceInfo: {
      name: 'Nuxt Server',
      id: 'nitro-device-plugin'
    }
  })

  // Attach to global context
  nitroApp.jellyfin = jellyfin
})
