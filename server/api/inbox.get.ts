import { getQuery } from 'h3'
import { useDrizzle, tables, eq, and, or, asc } from '../utils/drizzle'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  console.log('[inbox.get.ts] session:', session)
  // Debug: print all headers
  console.log('[inbox.get.ts] headers:', event.headers)
  if (!session?.user || !(session.user as any).userName) {
    console.log('[inbox.get.ts] Unauthorized: no user or userName in session', session)
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const db = useDrizzle()
  const query = getQuery(event)
  console.log('[inbox.get.ts] query:', query)

  // Only mark as read if markAsRead is not explicitly set to 0
  const shouldMarkAsRead = query.markAsRead !== '0'
  const user = session.user as any

  // If user is fetching their own inbox, mark all received messages as read (regardless of admin status)
  if (!query.userName && shouldMarkAsRead) {
    await db.update(tables.messages)
      .set({ is_read: true })
      .where(
        and(
          eq(tables.messages.receiver_id, user.userName),
          eq(tables.messages.is_read, false)
        )
      )
  }

  if (user.isAdmin && query.userName) {
    const userName = query.userName as string
    const messages = await db.select().from(tables.messages)
      .where(or(
        and(
          eq(tables.messages.sender_id, userName),
          eq(tables.messages.receiver_id, user.userName)
        ),
        and(
          eq(tables.messages.sender_id, user.userName),
          eq(tables.messages.receiver_id, userName)
        )
      ))
      .orderBy(asc(tables.messages.timestamp))
      .all()
    return messages
  }

  const messages = await db.select().from(tables.messages)
    .where(or(
      eq(tables.messages.sender_id, user.userName),
      eq(tables.messages.receiver_id, user.userName)
    ))
    .orderBy(asc(tables.messages.timestamp))
    .all()
  console.log('[inbox.get.ts] messages found:', messages)
  return messages
})
