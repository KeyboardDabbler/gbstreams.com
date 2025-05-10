import { nanoid } from 'nanoid'
import { useDrizzle, tables, eq } from '../../utils/drizzle'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.isAdmin) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }
  const db = useDrizzle()
  const body = await readBody(event)
  const { content, receiver_id } = body
  if (!content || !receiver_id) {
    throw createError({ statusCode: 400, message: 'Missing content or receiver_id' })
  }
  const message = {
    id: nanoid(),
    sender_id: 'appAdmin',
    receiver_id,
    content,
    timestamp: new Date().toISOString(),
    is_read: false
  }
  await db.insert(tables.messages).values(message)
  return { success: true, message }
})
