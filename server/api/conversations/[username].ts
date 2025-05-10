// server/api/admin/conversations/[username].ts
import { useDrizzle, tables, or, and, eq, asc } from '../../utils/drizzle'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.isAdmin) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  const { username } = event.context.params
  const db = useDrizzle()

  // Mark all messages sent to admin by this user as read
  await db.update(tables.messages)
    .set({ is_read: true })
    .where(
      and(
        eq(tables.messages.sender_id, username),
        eq(tables.messages.receiver_id, 'appAdmin'),
        eq(tables.messages.is_read, false)
      )
    )

  const messages = await db.select().from(tables.messages)
    .where(or(
      and(eq(tables.messages.sender_id, username), eq(tables.messages.receiver_id, 'appAdmin')),
      and(eq(tables.messages.sender_id, 'appAdmin'), eq(tables.messages.receiver_id, username))
    ))
    .orderBy(asc(tables.messages.timestamp))
    .all()

  return messages
})
