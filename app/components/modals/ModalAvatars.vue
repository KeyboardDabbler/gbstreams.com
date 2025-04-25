<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['update:avatar'])

const open = ref(false)
const avatars = ref<{ category: string, filename: string, url: string }[]>([])
const selectedCategories = ref([
  'Netflix',
  'Playstation',
  'Pop Culture',
  'Steam',
  'Xbox 360',
  'Xbox One'
])
const searchTerm = ref('')
const loading = ref(false)
const selectedAvatar = ref<string | null>(null)
const toast = useToast()

const categories = [
  'Netflix',
  'Playstation',
  'Pop Culture',
  'Steam',
  'Xbox 360',
  'Xbox One'
]

const filteredAvatars = computed(() => {
  return avatars.value.filter(a =>
    selectedCategories.value.includes(a.category) &&
    (!searchTerm.value || a.filename.toLowerCase().includes(searchTerm.value.toLowerCase()))
  )
})

watch(open, async (val) => {
  if (val && avatars.value.length === 0) {
    loading.value = true
    try {
      const res = await fetch('/api/avatars')
      avatars.value = await res.json()
    } finally {
      loading.value = false
    }
  }
})

function toggleCategory(cat: string) {
  if (selectedCategories.value.includes(cat)) {
    selectedCategories.value = selectedCategories.value.filter(c => c !== cat)
  } else {
    selectedCategories.value.push(cat)
  }
}

function selectAvatar(url: string) {
  selectedAvatar.value = url
}

async function submitAvatar() {
  if (!selectedAvatar.value) return
  const { data, error } = await useFetch('/api/user/profile', {
    method: 'POST',
    body: { avatar: selectedAvatar.value }
  })
  if (!error.value) {
    emit('update:avatar', selectedAvatar.value)
    toast.add({
      title: 'Avatar updated',
      description: 'Your avatar has been updated.',
      color: 'success',
      icon: 'i-lucide-check'
    })
    open.value = false
  } else {
    toast.add({
      title: 'Avatar update failed',
      description: error.value.message || 'Failed to update avatar.',
      color: 'red',
      icon: 'i-lucide-x'
    })
  }
}
</script>

<template>
  <UModal
    v-model:open="open"
    fullscreen
    title="Select your avatar"
    :ui="{ footer: 'justify-end' }"
  >
    <UButton
      label="Choose"
      color="neutral"
    />

    <template #body>
      <div class="flex-1 divide-y divide-accented w-full">
        <div class="flex items-center gap-2 px-4 py-3.5 overflow-x-auto">
          <UInput
            v-model="searchTerm"
            class="max-w-sm min-w-[12ch]"
            placeholder="Search for an avatar..."
          />

          <UDropdownMenu
            :items="categories.map(category => ({
              label: category,
              type: 'checkbox' as const,
              checked: selectedCategories.includes(category),
              onUpdateChecked(checked: boolean) {
                toggleCategory(category)
              },
              onSelect(e?: Event) {
                e?.preventDefault()
              }
            }))"
            :content="{ align: 'end' }"
          >
            <UButton
              label="Filter by"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-chevron-down"
              class="ml-auto"
              aria-label="Columns select dropdown"
            />
          </UDropdownMenu>
        </div>

        <div class="flex flex-wrap gap-4 p-4">
          <template v-if="loading">
            <div v-for="n in 12" :key="n" class="flex flex-col items-center">
              <USkeleton class="w-24 h-24 rounded-full" />
            </div>
          </template>
          <template v-else>
            <div
              v-for="avatar in filteredAvatars"
              :key="avatar.url"
              class="flex flex-col items-center cursor-pointer"
              @click="selectAvatar(avatar.url)"
            >
              <img
                :src="avatar.url"
                :alt="avatar.filename"
                class="w-24 h-24 rounded-full border-4 transition-all"
                :class="selectedAvatar === avatar.url ? 'border-primary ring-2 ring-primary' : 'border-transparent'"
                loading="lazy"
              />
            </div>
          </template>
        </div>

        <div v-if="loading" class="flex items-center justify-center py-4">
          <span>Loading...</span>
        </div>
      </div>
    </template>

    <template #footer>
      <UButton
        label="Cancel"
        color="neutral"
        variant="outline"
        @click="open = false"
      />
      <UButton
        label="Submit"
        color="neutral"
        @click="submitAvatar"
      />
    </template>
  </UModal>
</template>
