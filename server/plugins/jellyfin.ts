import { Jellyfin } from '@jellyfin/sdk'

let discoveredServerUrl: string | null = null

export default defineNitroPlugin(async (nitroApp) => {
  if (!discoveredServerUrl) {
    const jellyfin = new Jellyfin({
      clientInfo: {
        name: 'GBStreams-com',
        version: '1.0.0'
      },
      deviceInfo: {
        name: 'Discovery',
        id: 'discovery-only'
      }
    })
    const servers = await jellyfin.discovery.getRecommendedServerCandidates('https://play.gbstreams.com')
    const best = jellyfin.discovery.findBestServer(servers)
    discoveredServerUrl = best.address
  }
  nitroApp.jellyfinServerUrl = discoveredServerUrl
})
