<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useInboxStore } from '~/stores/inbox'
import { useToast } from '#imports'

definePageMeta({
  layout: 'dashboard'
})

const inboxStore = useInboxStore()
const { messages } = storeToRefs(inboxStore)
const input = ref('')

const { data: mails } = await useFetch('/api/admin/inbox-list', {
  default: () => []
})

const selectedMail = ref<null | any>(null)
const isSlideoverOpen = ref(false)
const toast = useToast()

function startPollingForSelectedUser() {
  if (selectedMail.value?.userName) {
    if (inboxStore.pollingInterval) inboxStore.stopPolling()
    inboxStore.pollingInterval = setInterval(async () => {
      const { data } = await useFetch(`/api/conversations/${selectedMail.value.userName}`, { default: () => [], watch: false })
      if (data.value) inboxStore.setMessages(data.value)
    }, 5000)
  }
}

function stopPolling() {
  if (inboxStore.pollingInterval) inboxStore.stopPolling()
}

watch(() => selectedMail.value?.userName, (username) => {
  if (!username) {
    stopPolling()
    return
  }
  // Fetch immediately
  useFetch(`/api/conversations/${username}`, { default: () => [], watch: false }).then(({ data }) => {
    if (data.value) inboxStore.setMessages(data.value)
  })
  // Start polling
  startPollingForSelectedUser()
})

onUnmounted(() => {
  stopPolling()
})

function openInbox() {
  isSlideoverOpen.value = true
}

function onSelectMail(mail: any) {
  selectedMail.value = mail
  isSlideoverOpen.value = false
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
    variant: 'subtle',
    duration: 3000
  })
}

function mapMessages() {
  return messages.value.map(msg => ({
    id: msg.id,
    role: msg.sender_id === selectedMail.value?.userName ? 'user' : 'assistant',
    content: msg.content,
    createdAt: new Date(msg.timestamp)
  }))
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
      :error="error"
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
              :mails="mails"
              @update:model-value="onSelectMail"
            />
          </template>
        </USlideover>
      </template>
    </UChatPrompt>
  </UContainer>
</template>
