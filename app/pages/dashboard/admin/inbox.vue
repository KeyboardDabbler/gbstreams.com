<script setup lang="ts">
import { computed, ref, watch, watchEffect, onMounted, onUnmounted } from 'vue'
import { breakpointsTailwind } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useInboxStore } from '~/stores/inbox'

definePageMeta({
  layout: 'dashboard'
})

const inboxStore = useInboxStore()
const userStore = useUserStore()
const { messages, error } = storeToRefs(inboxStore)
const input = ref('')

const { data: mails } = await useFetch('/api/admin/inbox-list', {
  default: () => []
})

const selectedMail = ref<null | any>(null)
const isSlideoverOpen = ref(false)

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
        }
      }"
      :assistant="{
        avatar: {
          src: 'https://res.cloudinary.com/dpub6gcei/image/upload/v1678918296/GBstreams/branding/web/android-chrome-512x512_maskable_mteusr.png',
          alt: 'G Bstreams'
        }
      }"
      auto-scroll-icon="i-lucide-chevron-down"
      :should-scroll-to-bottom="false"
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
