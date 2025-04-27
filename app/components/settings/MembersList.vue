<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { Member } from '~/types'

defineProps<{
  members: Member[]
}>()

const UTable = resolveComponent('UTable')
const UBadge = resolveComponent('UBadge')
const USelect = resolveComponent('USelect')
const UAvatar = resolveComponent('UAvatar')

const columns = [
  {
    accessorKey: 'username',
    header: 'User',
    cell: ({ row }: any) => h('div', { class: 'flex items-center gap-2' }, [
      h(UAvatar, { ...row.original.avatar, size: 'sm' }),
      h('span', row.original.username)
    ])
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }: any) => row.original.email || '-'
  },
  {
    accessorKey: 'referrals',
    header: 'Referrals',
    cell: ({ row }: any) => row.original.referrals ?? '-'
  },
  {
    accessorKey: 'expiry',
    header: 'Expiry',
    cell: ({ row }: any) => row.original.expiry ?? '-'
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: any) => h(UBadge, { class: 'capitalize', variant: 'subtle', color: row.original.status === 'active' ? 'success' : 'neutral' }, () => row.original.status || '-')
  },
  {
    accessorKey: 'lastActive',
    header: 'Last Active',
    cell: ({ row }: any) => row.original.lastActive ?? '-'
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }: any) => h(USelect, {
      modelValue: row.original.role,
      items: ['member', 'owner'],
      color: 'neutral',
      ui: { value: 'capitalize', item: 'capitalize' }
    })
  },
  {
    accessorKey: 'template',
    header: 'Template',
    cell: ({ row }: any) => row.original.template ?? '-'
  }
]
</script>

<template>
  <UTable
    :data="members"
    :columns="columns"
    class="shrink-0"
  />
</template>
