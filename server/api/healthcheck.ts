export default defineEventHandler((event) => {
  setResponseStatus(event, 200)
  return {
    status: 'ok',
    timestamp: new Date().toISOString()
  }
})
