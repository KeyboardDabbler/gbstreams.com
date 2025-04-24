// server/plugins/jellyfin.ts
import { Jellyfin } from '@jellyfin/sdk'

export default defineNitroPlugin(async (nitroApp) => {
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

  const servers = await jellyfin.discovery.getRecommendedServerCandidates('https://play.gbstreams.com')
  const best = jellyfin.discovery.findBestServer(servers)
  const api = jellyfin.createApi(best.address)

  nitroApp.jellyfinApi = api
})
