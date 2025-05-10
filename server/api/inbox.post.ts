import { nanoid } from 'nanoid'
import nodemailer from 'nodemailer'
import { useDrizzle, tables, eq } from '../utils/drizzle'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.userName) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const db = useDrizzle()
  const body = await readBody(event)
  const { content, receiver_id } = body
  if (!content || !receiver_id) {
    throw createError({ statusCode: 400, message: 'Missing content or receiver_id' })
  }
  const message = {
    id: nanoid(),
    sender_id: session.user.userName,
    receiver_id,
    content,
    timestamp: new Date().toISOString(),
    is_read: false
  }
  await db.insert(tables.messages).values(message)

  const receiver = await db.select().from(tables.jellyfinUsers).where(eq(tables.jellyfinUsers.userName, receiver_id)).get()
  if (receiver?.email) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    await transporter.sendMail({
      from: 'gbstreams@gmail.com',
      to: receiver.email,
      subject: 'New Message on GBStreams',
      text: content
    })
  }

  return { success: true, message }
})
