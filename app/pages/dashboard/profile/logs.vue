<script setup lang="ts">
import { getPaginationRowModel } from '@tanstack/vue-table'
import type { TableColumn } from '@nuxt/ui'

definePageMeta({
  layout: 'dashboard'
})

const UBadge = resolveComponent('UBadge')

const devices = ref([
  {
    title: 'Pixel 5',
    description: 'Jellyfin Android 2.6.2',
    meta: 'GBstreams, 5 days ago',
    icon: 'i-custom-android',
    menuIcon: 'i-material-symbols-more-vert'
  },
  {
    title: 'iPad Pro',
    description: 'Jellyfin iOS 1.8.0',
    meta: 'GBstreams, 2 days ago',
    icon: 'i-custom-apple',
    menuIcon: 'i-material-symbols-more-vert'
  },
  {
    title: 'Chromecast',
    description: 'Jellyfin Cast 1.0.0',
    meta: 'GBstreams, 10 days ago',
    icon: 'i-custom-chrome',
    menuIcon: 'i-material-symbols-more-vert'
  },
  {
    title: 'Pixel 5',
    description: 'Jellyfin Android 2.6.2',
    meta: 'GBstreams, 5 days ago',
    icon: 'i-custom-android',
    menuIcon: 'i-material-symbols-more-vert'
  },
  {
    title: 'iPad Pro',
    description: 'Jellyfin iOS 1.8.0',
    meta: 'GBstreams, 2 days ago',
    icon: 'i-custom-apple',
    menuIcon: 'i-material-symbols-more-vert'
  },
  {
    title: 'Chromecast',
    description: 'Jellyfin Cast 1.0.0',
    meta: 'GBstreams, 10 days ago',
    icon: 'i-custom-chrome',
    menuIcon: 'i-material-symbols-more-vert'
  }
])

const table = useTemplateRef('table')

type Payment = {
  time: string
  level: 'Trace' | 'Debug' | 'Information' | 'Warning' | 'Error' | 'Critical' | 'None'
  user: string
  name: string
  overview: string
  type: string
}

const data = ref<Payment[]>([
  {
    time: '2025-05-03 14:22',
    level: 'Trace',
    user: 'GBstreams',
    name: 'Pixel 5',
    overview: 'Device registered',
    type: 'Device'
  },
  {
    time: '2025-05-03 13:10',
    level: 'Debug',
    user: 'GBstreams',
    name: 'iPad Pro',
    overview: 'Login attempt',
    type: 'Session'
  },
  {
    time: '2025-05-02 19:45',
    level: 'Information',
    user: 'GBstreams',
    name: 'Chromecast',
    overview: 'Failed playback',
    type: 'Playback'
  },
  {
    time: '2025-05-03 14:22',
    level: 'Warning',
    user: 'GBstreams',
    name: 'Pixel 5',
    overview: 'Device registered',
    type: 'Device'
  },
  {
    time: '2025-05-03 13:10',
    level: 'Error',
    user: 'GBstreams',
    name: 'iPad Pro',
    overview: 'Login attempt',
    type: 'Session'
  },
  {
    time: '2025-05-02 19:45',
    level: 'Critical',
    user: 'GBstreams',
    name: 'Chromecast',
    overview: 'Failed playback',
    type: 'Playback'
  },
  {
    time: '2025-05-03 14:22',
    level: 'None',
    user: 'GBstreams',
    name: 'Pixel 5',
    overview: 'Device registered',
    type: 'Device'
  },
  {
    time: '2025-05-03 13:10',
    level: 'Warning',
    user: 'GBstreams',
    name: 'iPad Pro',
    overview: 'Login attempt',
    type: 'Session'
  },
  {
    time: '2025-05-02 19:45',
    level: 'Error',
    user: 'GBstreams',
    name: 'Chromecast',
    overview: 'Failed playback',
    type: 'Playback'
  }
])

const columns: TableColumn<Payment>[] = [
  {
    accessorKey: 'time',
    header: 'Time',
    cell: ({ row }) => row.getValue('time')
  },
  {
    accessorKey: 'level',
    header: 'Level',
    cell: ({ row }) => {
      const color = {
        Trace: 'success' as const,
        Debug: 'error' as const,
        Information: 'neutral' as const,
        Warning: 'success' as const,
        Error: 'error' as const,
        Critical: 'neutral' as const,
        None: 'neutral' as const
      }[row.getValue('level') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
        row.getValue('level')
      )
    }
  },
  {
    accessorKey: 'user',
    header: 'User',
    cell: ({ row }) => row.getValue('user')
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => row.getValue('name')
  },
  {
    accessorKey: 'overview',
    header: 'Overview',
    cell: ({ row }) => row.getValue('overview')
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => row.getValue('type')
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => row.getValue('role')
  },
  {
    accessorKey: 'template',
    header: 'Template',
    cell: ({ row }) => row.getValue('template')
  }
]

const pagination = ref({
  pageIndex: 0,
  pageSize: 5
})
</script>

<template>
  <div>
    <UPageCard
      title="Registered Devices"
      description="View the registered devices associated with your account."
      variant="ghost"
      class="mb-6"
    >
      <UPageGrid class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <UPageCard
          v-for="(device, idx) in devices"
          :key="idx"
          :title="device.title"
          :description="device.description"
          class="relative"
          orientation="vertical"
          reverse
          variant="soft"
        >
          <template #header>
            <div class="absolute top-2 right-2 z-10">
              <UIcon
                :name="device.menuIcon"
                class="text-xl text-muted cursor-pointer"
              />
            </div>
          </template>
          <UIcon
            :name="device.icon"
            class="size-16 mx-auto my-4 text-primary"
          />
          <template #footer>
            <div class="text-xs text-muted">
              {{ device.meta }}
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageCard>

    <UPageCard
      title="Activity Logs"
      description="View the activity logs of your account."
      variant="ghost"
    />
    <div class="w-full space-y-4 pb-4 p-4">
      <UTable
        ref="table"
        v-model:pagination="pagination"
        :data="data"
        :columns="columns"
        :pagination-options="{
          getPaginationRowModel: getPaginationRowModel()
        }"
        class="flex-1"
      />
    </div>

    <div class="flex items-center justify-between gap-3 border-t border-default pt-4 mt-auto">
      <div class="text-sm text-muted">
        {{ table?.tableApi?.getFilteredSelectedRowModel().rows.length || 0 }} of
        {{ table?.tableApi?.getFilteredRowModel().rows.length || 0 }} row(s) selected.
      </div>

      <div class="flex items-center gap-1.5">
        <UPagination
          :default-page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
          :items-per-page="table?.tableApi?.getState().pagination.pageSize"
          :total="table?.tableApi?.getFilteredRowModel().rows.length"
          @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
        />
      </div>
    </div>
  </div>
</template>
