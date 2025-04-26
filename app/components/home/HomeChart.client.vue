<script setup lang="ts">
import { ref } from 'vue'
import { eachDayOfInterval, format, sub } from 'date-fns'
import { VisXYContainer, VisGroupedBar, VisAxis, VisTooltip, VisCrosshair } from '@unovis/vue'

const cardRef = useTemplateRef<HTMLElement | null>('cardRef')

const { width } = useElementSize(cardRef)

const stats = ref<{ user_usage: Record<string, number> } | null>(null)
const loading = ref(true)
const error = ref(null)

const range = ref({
  start: sub(new Date(), { days: 14 }),
  end: new Date()
})
const period = ref('daily')

const filterMovies = ref(true)
const filterEpisodes = ref(true)

function getFilterParam() {
  const filters = []
  if (filterMovies.value) filters.push('Movie')
  if (filterEpisodes.value) filters.push('Episode')
  return filters.join(',')
}

async function fetchData() {
  loading.value = true
  error.value = null
  try {
    const days = Math.ceil((range.value.end.getTime() - range.value.start.getTime()) / (1000 * 60 * 60 * 24)) + 1
    const endDate = range.value.end.toISOString().slice(0, 10)
    const filter = getFilterParam()
    const res = await $fetch('/api/user/playback-report', {
      params: { days, endDate, filter }
    })
    stats.value = res
    console.log('Fetched playback report:', res)
  } catch (e) {
    error.value = e
    stats.value = null
    console.error('Error fetching playback report:', e)
  } finally {
    loading.value = false
  }
}

watch(() => [period.value, range.value.start, range.value.end, filterMovies.value, filterEpisodes.value], fetchData, { immediate: true })

const chartData = computed(() => {
  if (!stats.value) return []
  // Always show all days in range, even if 0
  const daysArr = eachDayOfInterval({ start: range.value.start, end: range.value.end })
  return daysArr.map(date => {
    const key = date.toISOString().slice(0, 10)
    return { date, count: stats.value.user_usage[key] ?? 0 }
  })
})

const x = (_: any, i: number) => i
const y = (d: any) => d.count
const formatDate = (date: Date) => format(date, 'd MMM')
const xTicks = (i: number) => {
  if (!chartData.value[i]) return ''
  const date = chartData.value[i].date
  if (i === 0 || i === chartData.value.length - 1) return formatDate(date)
  if (chartData.value.length <= 14) return formatDate(date)
  if (i % 7 === 0) return formatDate(date)
  return ''
}
const template = (d: any) => `${formatDate(d.date)}: ${d.count} plays`
const total = computed(() => chartData.value.reduce((acc, d) => acc + d.count, 0))
</script>

<template>
  <UCard ref="cardRef" :ui="{ body: '!px-0 !pt-0 !pb-3' }">
    <template #header>
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-xs text-(--ui-text-muted) uppercase mb-1.5">
            Playback Count
          </p>
          <p class="text-3xl text-(--ui-text-highlighted) font-semibold">
            {{ total }}
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <HomeDateRangePicker v-model="range" class="-ms-1" />
          <HomePeriodSelect v-model="period" :range="range" />
          <UCheckbox v-model="filterMovies" color="neutral" label="Movies" />
          <UCheckbox v-model="filterEpisodes" color="neutral" label="Episodes" />
        </div>
      </div>
    </template>

    <VisXYContainer
      :data="chartData"
      :padding="{ top: 40 }"
      class="h-96"
      :width="width"
    >
      <VisGroupedBar :x="x" :y="y" color="var(--ui-primary)" />
      <VisAxis type="x" :x="x" :tick-format="xTicks" />
      <VisAxis type="y" :y="y" />
      <VisCrosshair color="var(--ui-primary)" :template="template" />
      <VisTooltip />
    </VisXYContainer>
    <div v-if="loading" class="text-center py-4">Loading...</div>
    <div v-if="error" class="text-center text-red-500 py-4">Error loading chart</div>
    <div v-if="!loading && chartData.length === 0 && !error" class="text-center py-4">No data available</div>
  </UCard>
</template>

<style scoped>
.unovis-xy-container {
  --vis-crosshair-line-stroke-color: var(--ui-primary);
  --vis-crosshair-circle-stroke-color: var(--ui-bg);
  --vis-axis-grid-color: var(--ui-border);
  --vis-axis-tick-color: var(--ui-border);
  --vis-axis-tick-label-color: var(--ui-text-dimmed);
  --vis-tooltip-background-color: var(--ui-bg);
  --vis-tooltip-border-color: var(--ui-border);
  --vis-tooltip-text-color: var(--ui-text-highlighted);
}
</style>
