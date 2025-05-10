<script setup lang="ts">
import { shallowRef } from 'vue'

type InboxMail = {
  id: string
  userName: string
  avatar?: string
  latestMessage: string
  unread: boolean
  date: string | null
  is_read?: boolean // for local reactivity
}

const props = defineProps<{
  mails: InboxMail[]
}>()

const mailsRefs = ref<Element[]>([])

const selectedMail = defineModel<InboxMail | null>()

// Helper to sort by date descending
function sortByDateDesc(mails: InboxMail[]) {
  return [...mails].sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date!).getTime() - new Date(a.date!).getTime()
  })
}

// Always keep localMails sorted
const localMails = shallowRef(sortByDateDesc(props.mails.map(mail => ({ ...mail, is_read: mail.is_read ?? !mail.unread }))))

watch(
  () => props.mails,
  (newMails) => {
    localMails.value = sortByDateDesc(newMails.map(mail => ({ ...mail, is_read: mail.is_read ?? !mail.unread })))
  },
  { deep: true }
)

watch(selectedMail, async (mail) => {
  if (!mail) return
  const ref = mailsRefs.value[mail.id]
  if (ref) {
    ref.scrollIntoView({ block: 'nearest' })
  }
})

// Emit event to parent when a mail is marked as read
const emit = defineEmits(['mark-read'])

const selectMail = (mail: InboxMail) => {
  selectedMail.value = mail
  // Mark as read locally for instant UI update
  const found = localMails.value.find(m => m.id === mail.id)
  if (found && found.is_read === false) {
    found.is_read = true
    emit('mark-read', mail.id)
  }
}

defineShortcuts({
  arrowdown: () => {
    const index = localMails.value.findIndex(mail => mail.id === selectedMail.value?.id)
    if (index === -1) {
      selectedMail.value = localMails.value[0]
    } else if (index < localMails.value.length - 1) {
      selectedMail.value = localMails.value[index + 1]
    }
  },
  arrowup: () => {
    const index = localMails.value.findIndex(mail => mail.id === selectedMail.value?.id)
    if (index === -1) {
      selectedMail.value = localMails.value[localMails.value.length - 1]
    } else if (index > 0) {
      selectedMail.value = localMails.value[index - 1]
    }
  }
})
</script>

<template>
  <div class="overflow-y-auto divide-y divide-default">
    <div
      v-for="mail in localMails"
      :key="mail.id"
      :ref="el => { mailsRefs[mail.id] = el as Element }"
    >
      <div
        class="p-4 sm:px-6 text-sm cursor-pointer border-l-2 transition-colors"
        :class="[
          mail.is_read === false ? 'text-highlighted' : 'text-toned',
          selectedMail && selectedMail.id === mail.id ? 'border-primary bg-primary/10' : 'border-(--ui-bg) hover:border-primary hover:bg-primary/5'
        ]"
        @click="selectMail(mail)"
      >
        <div
          class="flex items-center justify-between"
          :class="mail.is_read === false ? 'font-semibold' : ''"
        >
          <div class="flex items-center gap-3">
            {{ mail.userName }}
            <UChip v-if="mail.is_read === false" />
          </div>
          <span>{{ mail.date }}</span>
        </div>
        <p class="text-dimmed line-clamp-1">
          {{ mail.latestMessage }}
        </p>
      </div>
    </div>
  </div>
</template>
