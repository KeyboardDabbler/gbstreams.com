import { render } from '@vue-email/render'
import nodemailer from 'nodemailer'
import AccessRequest from '~/email/AccessRequest.vue'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.log('server route value:', body)

  // Validate the Turnstile token
  const isValid = await verifyTurnstileToken(body.token)
  if (!isValid) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Invalid CAPTCHA token.'
    })
  }

  // Validate the incoming data
  if (!body.email || !body.username) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and Username are required'
    })
  }

  // Render the email content
  const html = await render(AccessRequest, body)
  const text = await render(AccessRequest, body, { plainText: true })

  // Configure the transporter
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

  // Send the email
  await transporter.sendMail({
    from: '"Website Bot" <gbstreams@gmail.com>',
    to: process.env.ADMIN_EMAIL,
    subject: 'New Access Request',
    html,
    text
  })

  return { success: true }
})
