export default defineEventHandler(async (event) => {
  try {
    const body: Schema | null = await readBody(event)
    const apiUrl = `${useRuntimeConfig().apiSecret.JFA_URLL}invite/${body.code}`
    const response = await fetch(apiUrl)

    if (response.ok) {
      return 200
    } else {
      return createError({ statusCode: 404, statusMessage: 'Invalid invite code' })
    }
  } catch (error) {
    console.error(error)
    return createError({ statusCode: 500, statusMessage: 'Something went wrong.' })
  }
})
