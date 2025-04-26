import { usePlaybackDrizzle, playbackTables, playbackEq } from '../../utils/drizzlePlayback'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const session = await getUserSession(event)
  if (!session?.user?.id) throw createError({ statusCode: 401, message: 'Unauthorized' })
  const userId = session.user.id

  const days = parseInt(query.days as string) || 28
  const endDate = query.endDate ? new Date(query.endDate as string) : new Date()
  const startDate = new Date(endDate)
  startDate.setDate(endDate.getDate() - days + 1)

  const filterTypes = (query.filter as string)?.split(',').map(s => s.trim()).filter(Boolean)

  const db = usePlaybackDrizzle()
  let rows = await db.select().from(playbackTables.playbackActivity)
    .where(playbackEq(playbackTables.playbackActivity.userId, userId))
    .all()
    .filter(row => {
      const date = new Date(row.dateCreated)
      return date >= startDate && date <= endDate
    })

  if (filterTypes && filterTypes.length > 0) {
    rows = rows.filter(row => filterTypes.includes(row.itemType))
  }

  const usage: Record<string, number> = {}
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const key = d.toISOString().slice(0, 10)
    usage[key] = 0
  }
  rows.forEach(row => {
    const key = new Date(row.dateCreated).toISOString().slice(0, 10)
    if (usage[key] !== undefined) usage[key]++
  })

  return {
    user_id: userId,
    user_name: session.user.userName || '',
    user_usage: usage
  }
})
