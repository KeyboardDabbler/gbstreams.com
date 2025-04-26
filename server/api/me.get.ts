import { useDrizzle, tables, eq } from '../utils/drizzle'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const db = useDrizzle()
  const user = await db.select().from(tables.jellyfinUsers)
    .where(eq(tables.jellyfinUsers.id, session.user.id)).get()
  if (!user) {
    throw createError({ statusCode: 404, message: 'User not found' })
  }
  return user
})
