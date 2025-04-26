import { tables, eq } from '../../utils/drizzlePlayback'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id) throw createError({ statusCode: 401, message: 'Unauthorized' })
  const userId = session.user.id

  const db = usePlaybackDrizzle()
  const allRows = await db.select().from(tables.playbackActivity)
    .where(eq(tables.playbackActivity.userId, userId))
    .all()

  // Helper to sum playDuration and format as X days Y hours Z minutes
  function formatPlayTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    return `${days ? days + ' days ' : ''}${hours % 24 ? (hours % 24) + ' hours ' : ''}${minutes % 60 ? (minutes % 60) + ' minutes' : ''}`.trim()
  }

  // Helper to filter rows by date
  function filterByDays(days: number) {
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    return allRows.filter(row => new Date(row.dateCreated) >= since)
  }

  const timeFrames = [
    { label: 'Last 24 hours', days: 1 },
    { label: 'Last 7 days', days: 7 },
    { label: 'Last 30 days', days: 30 },
    { label: 'All time', days: null }
  ]

  const stats = timeFrames.map(frame => {
    const rows = frame.days ? filterByDays(frame.days) : allRows
    const total_count = rows.length
    const totalSeconds = rows.reduce((sum, row) => sum + (row.playDuration || 0), 0)
    return {
      time_frame: frame.label,
      total_count,
      total_play_time: formatPlayTime(totalSeconds)
    }
  })

  return stats
})
