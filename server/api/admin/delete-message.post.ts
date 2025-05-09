import { useDrizzle, tables, eq } from '../../utils/drizzle'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.isAdmin) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }
  const db = useDrizzle()
  const body = await readBody(event)
  const { id } = body
  if (!id) {
    throw createError({ statusCode: 400, message: 'Missing message id' })
  }
  await db.delete(tables.messages).where(eq(tables.messages.id, id))
  return { success: true }
})
