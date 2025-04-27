import { UserLibraryApi } from '@jellyfin/sdk/lib/generated-client'
import { getJellyfinApiFromSession } from '../utils/jellyfinApi'

export default defineEventHandler(async (event) => {
  const api = await getJellyfinApiFromSession(event)
  const userId = api.userId

  const userLibraryApi = new UserLibraryApi(undefined, api.basePath, api.axiosInstance)

  const { data: items } = await userLibraryApi.getLatestMedia({
    userId,
    includeItemTypes: ['Movie', 'Series', 'Episode'],
    limit: 20,
    enableImages: true
  })

  return items
})
