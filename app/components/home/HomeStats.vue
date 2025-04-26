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

function parsePlayTime(str: string) {
  // Example: "87 days 18 hours 7 minutes"
  const regex = /(\d+)\s*(days?|hours?|minutes?)/g
  const result: { value: string, unit: string }[] = []
  let match
  while ((match = regex.exec(str)) !== null) {
    result.push({ value: match[1], unit: match[2] })
  }
  return result
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
      :ui="{
        container: 'gap-y-1.5',
        wrapper: 'items-start',
        leading: 'p-2.5 rounded-full bg-primary/10 ring ring-inset ring-primary/25 flex-col',
        title: 'font-normal text-muted text-xs uppercase'
      }"
      class="lg:rounded-none first:rounded-l-lg last:rounded-r-lg hover:z-1"
    >
      <div class="flex flex-col gap-1">
        <span class="text-2xl font-semibold text-(--ui-primary)">
          {{ stat.total_count }} <span class="text-gray-400 italic text-sm">plays</span>
        </span>
        <span>
          <template v-for="(part, i) in parsePlayTime(stat.total_play_time)" :key="i">
            <span class="text-xl font-semibold text-(--ui-primary)">{{ part.value }}</span>
            <span class="text-gray-400 italic text-xs">{{ part.unit }}</span>
            <span class="inline-block w-2"></span>
            <span v-if="i !== parsePlayTime(stat.total_play_time).length - 1"> </span>
          </template>
        </span>
      </div>
    </UPageCard>
    <div v-if="loading" class="col-span-4 text-center py-4">Loading...</div>
    <div v-if="error" class="col-span-4 text-center text-red-500 py-4">Error loading stats</div>
    <div v-if="!loading && stats.length === 0 && !error" class="col-span-4 text-center py-4">No stats available</div>
  </UPageGrid>
</template>
