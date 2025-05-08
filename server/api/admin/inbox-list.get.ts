import { useDrizzle, tables, desc, eq, and, or, not } from '../../utils/drizzle'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.isAdmin) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }
  const db = useDrizzle()
  // Get all users except the system admin (e.g., userName 'appAdmin')
  const users = await db.select().from(tables.jellyfinUsers)
    .where(not(eq(tables.jellyfinUsers.userName, 'appAdmin')))
    .all()

  const adminId = 'appAdmin'

  // For each user, get their latest message with appAdmin (if any)
  const result = await Promise.all(users.map(async (user) => {
    const latestMsg = await db.select().from(tables.messages)
      .where(or(
        and(eq(tables.messages.sender_id, user.userName), eq(tables.messages.receiver_id, adminId)),
        and(eq(tables.messages.sender_id, adminId), eq(tables.messages.receiver_id, user.userName))
      ))
      .orderBy(desc(tables.messages.timestamp))
      .limit(1)
      .get()

    return {
      id: user.userName,
      userName: user.userName,
      avatar: user.avatar,
      latestMessage: latestMsg?.content || '',
      unread: latestMsg ? !latestMsg.is_read && latestMsg.receiver_id === adminId : false,
      date: latestMsg?.timestamp || null
    }
  }))
  // Sort by latest message date descending, users with no messages at the bottom
  result.sort((a, b) => {
    if (!a.date && !b.date) return a.userName.localeCompare(b.userName)
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return result
})
