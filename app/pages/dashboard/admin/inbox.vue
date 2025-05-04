<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { breakpointsTailwind } from '@vueuse/core'
import type { Mail } from '~/types'

definePageMeta({
  layout: 'dashboard'
})

const tabItems = [{
  label: 'All',
  value: 'all'
}, {
  label: 'Unread',
  value: 'unread'
}]
const selectedTab = ref('all')

const { data: mails } = await useFetch<Mail[]>('/api/mails', { default: () => [] })

// Filter mails based on the selected tab
const filteredMails = computed(() => {
  if (selectedTab.value === 'unread') {
    return mails.value.filter(mail => !!mail.unread)
  }

  return mails.value
})

const selectedMail = ref<Mail | null>()

const isMailPanelOpen = computed({
  get() {
    return !!selectedMail.value
  },
  set(value: boolean) {
    if (!value) {
      selectedMail.value = null
    }
  }
})

// Reset selected mail if it's not in the filtered mails
watch(filteredMails, () => {
  if (!filteredMails.value.find(mail => mail.id === selectedMail.value?.id)) {
    selectedMail.value = null
  }
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('lg')
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      'Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It\'s a beautiful day with clear skies.'
  },
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      'Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It\'s a beautiful day with clear skies.'
  },
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      'Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It\'s a beautiful day with clear skies.'
  },
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      'Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It\'s a beautiful day with clear skies.'
  },
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      'Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It\'s a beautiful day with clear skies.'
  }
])
</script>

<template>
  <UContainer class="flex-1 flex flex-col gap-4 sm:gap-6">
    <UChatMessages
      :user="{
        avatar: {
          src: 'https://github.com/benjamincanac.png'
        }
      }"
      :assistant="{
        avatar: {
          icon: 'i-lucide-bot'
        }
      }"
      auto-scroll-icon="i-lucide-chevron-down"
      :should-scroll-to-bottom="false"
      :messages="messages"
    />

    <UChatPrompt
      v-model="input"
      :error="error"
      class="sticky bottom-0 [view-transition-name:chat-prompt] rounded-b-none z-10"
      @submit="handleSubmit"
    >
      <UChatPromptSubmit />
      <template #footer>
        <USlideover
          title="Slideover with description"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <UButton
            label="Open"
            color="neutral"
            variant="subtle"
          />

          <template #body>
            <InboxList
              v-model="selectedMail"
              :mails="filteredMails"
            />
          </template>
        </USlideover>
      </template>
    </UChatPrompt>
  </UContainer>
</template>
