<script setup lang="ts">
import { ref, onMounted } from 'vue'

const latest = ref([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('/api/jellyfin-latest')
    const data = await res.json()
    if (Array.isArray(data)) {
      latest.value = data
    } else if (data && data.error) {
      error.value = data.message || 'Failed to load latest media'
    } else {
      error.value = 'Unexpected response from server'
    }
  } catch (e) {
    error.value = 'Failed to load latest media'
  } finally {
    loading.value = false
  }
})

function getPosterUrl(item) {
  if (item.ImageTags && item.ImageTags.Primary) {
    return `/api/jellyfin/image/${item.Id}/Primary?tag=${item.ImageTags.Primary}`
  }
  return '/placeholder.png'
}
</script>

<template>
  <div class="flex pb-4 items-center">
    <span class="text-2xl text-white truncate">
      Recently Added
      <Icon 
        name="line-md:arrow-right-circle"
        size="24px"
        class="ml-2 text-white"
      />
    </span>
  </div>
  <div v-if="loading" class="text-gray-400">Loading…</div>
  <div v-else-if="error" class="text-red-400">{{ error }}</div>
  <UCarousel
    v-else
    v-slot="{ item }"
    :items="latest"
    dots
    :ui="{ item: 'basis-1/6' }"
  >
    <div class="px-2">
      <div class="w-36 md:w-44">
        <div 
          class="relative overflow-hidden rounded-xl bg-gray-800 bg-cover ring-1 ring-gray-700"
          style="padding-bottom: 150%;"
        >
          <img 
            :src="getPosterUrl(item)"
            :alt="item.Name"
            class="absolute inset-0 h-full w-full object-cover">
          <div class="absolute left-0 right-0 flex items-center justify-between p-2">
            <div 
              v-if="item.Type"
              class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md"
              :class="item.Type === 'Series' ? 'border-purple-600 bg-purple-600' : 'border-blue-500 bg-blue-600'"
            >
              <div class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                {{ item.Type }}
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2 text-xs text-white truncate">
          {{ item.Name }}
        </div>
      </div>
    </div>
  </UCarousel>
</template>
