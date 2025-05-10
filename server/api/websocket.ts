import { defineWebSocketHandler } from 'h3'
import { useDrizzle, tables } from '../utils/drizzle'

// Map to track connected clients by userName
const clients = new Map()

console.log('[websocket.ts] WebSocket handler loaded')

export default defineWebSocketHandler({
  async upgrade(request) {
    console.log('[websocket.ts] Upgrade requested')
    await requireUserSession(request)
  },
  async open(peer) {
    console.log('[websocket.ts] Open called')
    const { user } = await requireUserSession(peer)
    if (!user?.userName) {
      peer.close()
      return
    }
    // Attach userName to peer (bypass TS error)
    // @ts-expect-error: custom property
    peer.userName = user.userName
    clients.set(user.userName, peer)
    peer.send(JSON.stringify({ type: 'welcome', userName: user.userName }))
    console.log('[websocket.ts] WebSocket opened for user:', user.userName)
  },
  close(peer) {
    console.log('[websocket.ts] Close called')
    // @ts-expect-error: custom property
    if (peer.userName) {
      clients.delete(peer.userName)
      console.log('[websocket.ts] WebSocket closed for user:', peer.userName)
    }
  },
  async message(peer, message) {
    console.log('[websocket.ts] Message handler called')
    let msg
    try {
      // If message is a Buffer, convert to string
      if (Buffer.isBuffer(message)) {
        message = message.toString('utf8')
      }
      // If message is an object with a 'data' Buffer (as in ws/crossws dev), extract and convert
      if (message && typeof message === 'object' && message.data && Buffer.isBuffer(message.data)) {
        message = message.data.toString('utf8')
      }
      msg = typeof message === 'string' ? JSON.parse(message) : message
      console.log('[websocket.ts] Received message:', msg)
    } catch (err) {
      console.error('[websocket.ts] Failed to parse message:', message, err)
      return
    }
    // @ts-expect-error: custom property
    if (!peer.userName) {
      console.error('[websocket.ts] No peer.userName for message:', msg)
      return
    }
    const db = useDrizzle()
    // @ts-expect-error: custom property
    const senderUserName = peer.userName
    if (msg.type === 'send-message') {
      const { content } = msg
      const receiver_id = 'appAdmin'
      const newMsg = {
        id: crypto.randomUUID(),
        sender_id: senderUserName,
        receiver_id,
        content,
        timestamp: new Date().toISOString(),
        is_read: false
      }
      console.log('[websocket.ts] Inserting message:', newMsg)
      await db.insert(tables.messages).values(newMsg)
      if (clients.has('appAdmin')) {
        clients.get('appAdmin').send(JSON.stringify({ type: 'new-message', message: newMsg }))
        console.log('[websocket.ts] Notified admin of new message')
      }
      peer.send(JSON.stringify({ type: 'new-message', message: newMsg }))
      console.log('[websocket.ts] Echoed new message to sender')
    }
    // @ts-expect-error: custom property
    if (msg.type === 'admin-send-message' && senderUserName === 'appAdmin') {
      const { content, receiver_id } = msg
      const newMsg = {
        id: crypto.randomUUID(),
        sender_id: 'appAdmin',
        receiver_id,
        content,
        timestamp: new Date().toISOString(),
        is_read: false
      }
      console.log('[websocket.ts] Admin inserting message:', newMsg)
      await db.insert(tables.messages).values(newMsg)
      if (clients.has(receiver_id)) {
        clients.get(receiver_id).send(JSON.stringify({ type: 'new-message', message: newMsg }))
        console.log('[websocket.ts] Notified user of new message')
      }
      peer.send(JSON.stringify({ type: 'new-message', message: newMsg }))
      console.log('[websocket.ts] Echoed new message to admin')
    }
  }
})
