<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useInboxStore } from '~/stores/inbox'
import { useToast } from '#imports'

definePageMeta({
  layout: 'dashboard'
})

const inboxStore = useInboxStore()
const input = ref('')

const { data: mails } = await useFetch('/api/admin/inbox-list', {
  default: () => []
})

const selectedMail = ref<null | any>(null)
const isSlideoverOpen = ref(false)
const toast = useToast()

// Add a local ref for messages
const messages = ref<any[]>([])

// --- WebSocket integration for admin ---
function startWebSocketForSelectedUser() {
  if (selectedMail.value?.userName) {
    // Always close previous connection
    if (inboxStore.ws && inboxStore.wsStatus === 'OPEN') {
      inboxStore.ws.close()
    }
    // Start WebSocket as appAdmin
    inboxStore.initWebSocket()
  }
}

onUnmounted(() => {
  if (inboxStore.ws && inboxStore.wsStatus === 'OPEN') {
    inboxStore.ws.close()
  }
})

function openInbox() {
  isSlideoverOpen.value = true
}

function onSelectMail(mail: any) {
  selectedMail.value = mail
  isSlideoverOpen.value = false
  if (mail?.userName) {
    useFetch(`/api/conversations/${mail.userName}`, { default: () => [], watch: false }).then(({ data }) => {
      if (data.value) {
        inboxStore.setMessages(data.value)
        messages.value = data.value
      }
    })
    startWebSocketForSelectedUser()
  }
}

// Update unread state in parent mails when a conversation is opened
function onMarkRead(mailId: string) {
  if (!mails.value) return
  const idx = mails.value.findIndex((m: any) => m.id === mailId)
  if (idx !== -1) {
    // Update unread property so badge and highlight update
    mails.value[idx].unread = false
  }
}

function onSubmit() {
  if (!input.value.trim() || !selectedMail.value?.userName) return
  inboxStore.adminSendMessage(input.value, selectedMail.value.userName)
  input.value = ''
}

function onDelete(e: MouseEvent, message: any) {
  inboxStore.deleteMessage(message.id)
  toast.add({
    title: 'Message deleted',
    description: `Message with ID ${message.id} was deleted`,
    icon: 'i-lucide-trash',
    color: 'error',
    duration: 3000
  })
}

function mapMessages() {
  return messages.value.map(msg => ({
    id: msg.id,
    role: msg.sender_id === selectedMail.value?.userName ? 'user' : 'assistant',
    content: msg.content,
    createdAt: new Date(msg.timestamp)
  })) as any // Cast to any for UChatMessages
}
</script>

<template>
  <UContainer class="flex-1 flex flex-col gap-4 sm:gap-6">
    <UChatMessages
      :user="{
        avatar: {
          src: selectedMail?.avatar,
          alt: selectedMail?.userName
        },
        actions: [
          {
            label: 'Delete',
            icon: 'i-lucide-trash',
            onClick: onDelete
          }
        ]
      }"
      :assistant="{
        avatar: {
          src: 'https://res.cloudinary.com/dpub6gcei/image/upload/v1678918296/GBstreams/branding/web/android-chrome-512x512_maskable_mteusr.png',
          alt: 'G Bstreams'
        },
        actions: [
          {
            label: 'Delete',
            icon: 'i-lucide-trash',
            onClick: onDelete
          }
        ]
      }"
      class="lg:pt-(--ui-header-height) pb-4 sm:pb-6"
      :spacing-offset="160"
      :should-scroll-to-bottom="true"
      should-auto-scroll
      :messages="mapMessages()"
    />
    <UChatPrompt
      v-model="input"
      class="sticky bottom-0 [view-transition-name:chat-prompt] rounded-b-none z-10"
      @submit="onSubmit"
    >
      <UChatPromptSubmit />
      <template #footer>
        <USlideover
          v-model:open="isSlideoverOpen"
          title="User Conversations"
          description="Select a user to view their conversation."
        >
          <UButton
            label="Open"
            color="neutral"
            variant="subtle"
            @click="openInbox"
          />

          <template #body>
            <InboxList
              v-model="selectedMail"
              :mails="mails.map(mail => ({ ...mail, is_read: !mail.unread }))"
              @update:model-value="onSelectMail"
              @mark-read="onMarkRead"
            />
          </template>
        </USlideover>
      </template>
    </UChatPrompt>
  </UContainer>
</template>
