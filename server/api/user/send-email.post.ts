export interface IFormData {
    email: string
    username: string
    textarea: string
}

export default defineEventHandler(async (event) => {
    try {
        const body: IFormData | null = await readBody(event)
        if (!body) {
            return createError({ statusCode: 400, statusMessage: 'Bad request.' })
        }
        // const keys = useStorage().getKeys() - Get list of all keys available to your app.
        const source = await useStorage().getItem('root:assets:email-templates:verification.html')
        const emailHeading: { to: string, subject: string } = {
            to: 'predefined@example.com',
            subject: 'GBstreams - Request access form'
        }
        const emailBody: { email: string, user: string, textarea: string } = {
            email: body.email,
            user: body.username,
            textarea: body.textarea,
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
