import { getQuery } from 'h3'
import { useDrizzle, tables, eq, and, or, asc } from '../utils/drizzle'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.userName) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const db = useDrizzle()
  const query = getQuery(event)

  if (session.user.isAdmin && query.userName) {
    const userName = query.userName as string
    const messages = await db.select().from(tables.messages)
      .where(or(
        and(
          eq(tables.messages.sender_id, userName),
          eq(tables.messages.receiver_id, session.user.userName)
        ),
        and(
          eq(tables.messages.sender_id, session.user.userName),
          eq(tables.messages.receiver_id, userName)
        )
      ))
      .orderBy(asc(tables.messages.timestamp))
      .all()
    return messages
  }

  const messages = await db.select().from(tables.messages)
    .where(or(
      eq(tables.messages.sender_id, session.user.userName),
      eq(tables.messages.receiver_id, session.user.userName)
    ))
    .orderBy(asc(tables.messages.timestamp))
    .all()
  return messages
})
