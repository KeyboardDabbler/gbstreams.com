import { defineStore } from 'pinia'

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
    pollingInterval: null as ReturnType<typeof setInterval> | null
  }),
  actions: {
    async fetchMessages() {
      this.loading = true
      try {
        const { data } = await useFetch<Message[]>('/api/inbox')
        this.messages = data.value || []
        this.error = null
      } catch (e) {
        this.error = 'Failed to fetch messages'
      } finally {
        this.loading = false
      }
    },

    async sendMessage(content: string, receiver_id: string) {
      try {
        const { data } = await useFetch('/api/inbox', {
          method: 'POST',
          body: { content, receiver_id }
        })
        if (data.value?.success) {
          this.messages.push(data.value.message)
        }
      } catch (e) {
        this.error = 'Failed to send message'
      }
    },

    async adminSendMessage(content: string, receiver_id: string) {
      try {
        const { data } = await useFetch('/api/admin/send-message', {
          method: 'POST',
          body: { content, receiver_id }
        })
        if (data.value?.success) {
          this.messages.push(data.value.message)
        }
      } catch (e) {
        this.error = 'Failed to send message'
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

    setMessages(messages: Message[]) {
      this.messages = messages
    },

    pollForNewMessages(intervalMs = 5000) {
      if (this.pollingInterval) clearInterval(this.pollingInterval)
      this.fetchMessages()
      this.pollingInterval = setInterval(() => {
        this.fetchMessages()
      }, intervalMs)
    },

    stopPolling() {
      if (this.pollingInterval) clearInterval(this.pollingInterval)
      this.pollingInterval = null
    }
  }
})
