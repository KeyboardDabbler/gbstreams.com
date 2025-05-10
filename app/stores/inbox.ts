import { defineStore } from 'pinia'
import { useWebSocket } from '@vueuse/core'
import type { UseWebSocketReturn } from '@vueuse/core'

export interface Message {
  id: string
  sender_id: string
  receiver_id: string
  content: string
  timestamp: string
  is_read: boolean
  is_deleted: boolean
}

export const useInboxStore = defineStore('inbox', {
  state: () => ({
    messages: [] as Message[],
    loading: false,
    error: null as string | null,
    ws: null as UseWebSocketReturn<any> | null,
    wsStatus: 'CLOSED' as string
  }),
  actions: {
    initWebSocket() {
      if (this.ws) return
      const wsUrl = location.protocol === 'https:' ? `wss://${location.host}/api/websocket` : `ws://${location.host}/api/websocket`
      const ws = useWebSocket(wsUrl, {
        autoReconnect: true,
        onConnected: () => {
          this.wsStatus = 'OPEN'
        },
        onDisconnected: () => {
          this.wsStatus = 'CLOSED'
        },
        onError: () => {
          this.error = 'WebSocket error'
        }
      })
      watch(ws.data, (val) => {
        if (val) {
          console.log('[inbox.ts] WebSocket received:', val)
          this.handleMessage(val)
        }
      })
      this.ws = ws as any
    },
    handleMessage(raw: string) {
      try {
        const msg = JSON.parse(raw)
        console.debug('[inbox.ts] handleMessage: received', msg)
        if (msg.type === 'new-message' && msg.message) {
          // Only push if not already present
          if (!this.messages.some(m => m.id === msg.message.id)) {
            this.messages.push(msg.message)
            console.debug('[inbox.ts] handleMessage: pushed new message', msg.message)
          } else {
            console.debug('[inbox.ts] handleMessage: message already exists', msg.message.id)
          }
        }
      } catch (err) {
        console.error('[inbox.ts] handleMessage: parse error', err, raw)
        // ignore parse errors
      }
    },

    async fetchMessages(markAsRead = false) {
      this.loading = true
      try {
        let url = '/api/inbox'
        if (!markAsRead) {
          url += (url.includes('?') ? '&' : '?') + 'markAsRead=0'
        }
        console.log('[inbox.ts] fetchMessages: fetching', url)
        // Use $fetch for SSR-safe, reliable fetch in Nuxt/Nitro
        const data = await $fetch<Message[]>(url, { credentials: 'include' })
        console.log('[inbox.ts] fetchMessages: response', data)
        this.messages = Array.isArray(data) ? data : []
        console.debug('[inbox.ts] fetchMessages: set messages', this.messages)
        this.error = null
      } catch (err) {
        this.error = 'Failed to fetch messages'
        console.error('[inbox.ts] fetchMessages error:', err)
      } finally {
        this.loading = false
        console.log('[inbox.ts] fetchMessages: loading done, messages:', this.messages)
      }
    },

    async sendMessage(content: string, receiver_id: string) {
      if (this.ws && this.wsStatus === 'OPEN') {
        console.log('[inbox.ts] About to send via WebSocket', { content, receiver_id })
        this.ws.send(JSON.stringify({ type: 'send-message', content, receiver_id }))
        console.debug('[inbox.ts] sendMessage: sent via WebSocket', { content, receiver_id })
      } else {
        // fallback to REST
        try {
          const data = await $fetch('/api/inbox', {
            method: 'POST',
            body: { content, receiver_id },
            credentials: 'include'
          })
          if (data && data.success && data.message && 'id' in data.message && 'receiver_id' in data.message && 'content' in data.message) {
            this.messages.push({
              id: data.message.id,
              sender_id: data.message.sender_id,
              receiver_id: String(data.message.receiver_id),
              content: String(data.message.content),
              timestamp: data.message.timestamp,
              is_read: data.message.is_read,
              is_deleted: data.message.is_deleted
            })
            console.debug('[inbox.ts] sendMessage: pushed new message from REST', data.message)
          } else {
            console.error('[inbox.ts] sendMessage: REST response missing message', data)
          }
        } catch (err) {
          this.error = 'Failed to send message'
          console.error('[inbox.ts] sendMessage error:', err)
        }
      }
    },

    async adminSendMessage(content: string, receiver_id: string) {
      if (this.ws && this.wsStatus === 'OPEN') {
        this.ws.send(JSON.stringify({ type: 'admin-send-message', content, receiver_id }))
      } else {
        // fallback to REST
        try {
          const { data } = await useFetch('/api/admin/send-message', {
            method: 'POST',
            body: { content, receiver_id }
          })
          if (data.value?.success && data.value.message && 'id' in data.value.message && 'receiver_id' in data.value.message && 'content' in data.value.message) {
            this.messages.push({
              id: data.value.message.id,
              sender_id: data.value.message.sender_id,
              receiver_id: String(data.value.message.receiver_id),
              content: String(data.value.message.content),
              timestamp: data.value.message.timestamp,
              is_read: data.value.message.is_read,
              is_deleted: data.value.message.is_deleted
            })
            if (typeof window !== 'undefined') {
              const userStore = useUserStore()
              if (userStore.userName === receiver_id) {
                await this.fetchMessages()
              }
            }
          }
        } catch {
          this.error = 'Failed to send message'
        }
      }
    },

    async fetchMessagesForUser(userName: string) {
      this.loading = true
      try {
        const { data } = await useFetch<Message[]>(`/api/inbox?userName=${userName}`)
        this.messages = data.value || []
        this.error = null
      } catch (e) {
        this.error = 'Failed to fetch messages'
      } finally {
        this.loading = false
      }
    },

    async deleteMessage(id: string) {
      try {
        const { data } = await useFetch('/api/admin/delete-message', {
          method: 'POST',
          body: { id }
        })
        if (data.value?.success) {
          this.messages = this.messages.filter(msg => msg.id !== id)
        }
      } catch (e) {
        this.error = 'Failed to delete message'
      }
    },

    setMessages(messages: Message[]) {
      console.debug('[inbox.ts] setMessages: setting messages', messages)
      this.messages = messages
    }
  }
})
