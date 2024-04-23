export default defineEventHandler(async (event) => {
    try {
        const body: Schema | null = await readBody(event)
        if (!body) {
            return createError({ statusCode: 400, statusMessage: 'Bad request.' })
        }
        // const keys = useStorage().getKeys() - Get list of all keys available to your app.
        const source = await useStorage().getItem('root:assets:email-templates:request-email.html')
        const emailHeading: { to: string, subject: string } = {
            to: useRuntimeConfig().apiSecret.EMAIL_USER,
            subject: 'Request Access - Web form'
        }
        const emailBody: { name: string, body: string } = {
            name: body.username,
            email: body.email,
            body: body.textarea
        }
        if (source) {
            await sendEmail({ source: source as string, head: emailHeading, body: emailBody })
        }
        return 200 // Success
    } catch (error: unknown) {
        console.log(error)
        return createError({ statusCode: 500, statusMessage: 'Something went wrong.' })
    }
})