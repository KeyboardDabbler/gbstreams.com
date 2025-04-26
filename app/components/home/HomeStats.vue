<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = ref([])
const loading = ref(true)
const error = ref(null)

async function fetchData() {
  loading.value = true
  try {
    const res = await $fetch('/api/user/playstats')
    if (Array.isArray(res)) {
      stats.value = res
      console.log('Fetched stats:', stats.value)
    } else {
      stats.value = []
      console.warn('No array data from playstats endpoint')
    }
  } catch (e) {
    stats.value = []
    error.value = e
    console.error('Error fetching playstats:', e)
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>

<template>
  <UPageGrid class="lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-px">
    <UPageCard
      v-for="(stat, index) in stats"
      :key="stat.time_frame || index"
      :title="stat.time_frame"
      variant="subtle"
      class="lg:rounded-none first:rounded-l-[calc(var(--ui-radius)*2)] last:rounded-r-[calc(var(--ui-radius)*2)] hover:z-1"
    >
      <div class="flex flex-col gap-1">
        <span class="text-2xl font-semibold text-(--ui-text-highlighted)">
          {{ stat.total_count }} <span class="text-gray-400 italic text-sm">plays</span>
        </span>
        <span class="text-lg"> / </span>
        <span class="text-yellow text-lg">{{ stat.total_play_time }}</span>
      </div>
    </UPageCard>
    <div v-if="loading" class="col-span-4 text-center py-4">Loading...</div>
    <div v-if="error" class="col-span-4 text-center text-red-500 py-4">Error loading stats</div>
    <div v-if="!loading && stats.length === 0 && !error" class="col-span-4 text-center py-4">No stats available</div>
  </UPageGrid>
</template>
