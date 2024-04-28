import * as nodemailer from 'nodemailer'
import handlebars from 'handlebars'

interface IEmailData {
  source: string
  head: { to: string, subject: string }
  body: any
}

export default async (data: IEmailData): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: useRuntimeConfig().apiSecret.EMAIL_USER,
      pass: useRuntimeConfig().apiSecret.EMAIL_PASS
    }
  })

  const compileSource = handlebars.compile(data.source)
  const mailOptions = {
    from: useRuntimeConfig().apiSecret.EMAIL_USER,
    to: data.head.to,
    subject: data.head.subject,
    html: compileSource(data.body)
  }
  await transporter.sendMail(mailOptions)
}
