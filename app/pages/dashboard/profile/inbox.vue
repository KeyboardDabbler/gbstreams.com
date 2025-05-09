<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useInboxStore } from '~/stores/inbox'
import { useUserStore } from '~/stores/user'

definePageMeta({
  layout: 'dashboard'
})

const inboxStore = useInboxStore()
const userStore = useUserStore()
const { messages, error } = storeToRefs(inboxStore)
const input = ref('')

onMounted(() => {
  inboxStore.fetchMessages()
  inboxStore.pollForNewMessages()
})
onUnmounted(() => {
  inboxStore.stopPolling()
})

function onSubmit() {
  if (!input.value.trim()) return
  inboxStore.sendMessage(input.value, 'appAdmin')
  input.value = ''
}

function mapMessages() {
  return messages.value.map(msg => ({
    id: msg.id,
    role: msg.sender_id === userStore.userName ? 'user' : 'assistant',
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
          src: userStore.avatar,
          alt: userStore.userName
        }
      }"
      :assistant="{
        avatar: {
          src: 'https://res.cloudinary.com/dpub6gcei/image/upload/v1678918296/GBstreams/branding/web/android-chrome-512x512_maskable_mteusr.png',
          alt: 'G Bstreams'
        }
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
    </UChatPrompt>
  </UContainer>
</template>
