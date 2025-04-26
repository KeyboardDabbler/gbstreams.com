import { tables } from '../../utils/drizzlePlayback'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const session = await getUserSession(event)
  if (!session?.user?.id) throw createError({ statusCode: 401, message: 'Unauthorized' })
  const userId = session.user.id

  // Parse query params
  const days = parseInt(query.days as string) || 28
  const endDate = query.endDate ? new Date(query.endDate as string) : new Date()
  const startDate = new Date(endDate)
  startDate.setDate(endDate.getDate() - days + 1)

  // Parse filter param for itemType
  const filterTypes = (query.filter as string)?.split(',').map(s => s.trim()).filter(Boolean)

  // Query all playback activity for this user in the date range
  const db = usePlaybackDrizzle()
  let rows = db.select().from(tables.playbackActivity)
    .where(eq(tables.playbackActivity.userId, userId))
    .all()
    .filter(row => {
      const date = new Date(row.dateCreated)
      return date >= startDate && date <= endDate
    })

  // Filter by itemType if filter param is provided
  if (filterTypes && filterTypes.length > 0) {
    rows = rows.filter(row => filterTypes.includes(row.itemType))
  }

  // Aggregate play count per day
  const usage: Record<string, number> = {}
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const key = d.toISOString().slice(0, 10)
    usage[key] = 0
  }
  rows.forEach(row => {
    const key = new Date(row.dateCreated).toISOString().slice(0, 10)
    if (usage[key] !== undefined) usage[key]++
  })

  // Remove user lookup from main DB, use session info instead
  return {
    user_id: userId,
    user_name: session.user.userName || '',
    user_usage: usage
  }
})
