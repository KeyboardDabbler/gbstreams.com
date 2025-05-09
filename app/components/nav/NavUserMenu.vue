<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { useUserStore } from '@/stores/user'
import { useLogout } from '@/composables/useLogout'

const userStore = useUserStore()
const logoutAndRedirect = useLogout()

defineProps<{
  collapsed?: boolean
}>()

const user = computed(() => ({
  userName: userStore.userName,
  avatar: {
    src: userStore.avatar,
    alt: userStore.userName
  }
}))

const items = computed<DropdownMenuItem[][]>(() => ([[{
  type: 'label',
  label: user.value.userName,
  avatar: user.value.avatar
}], [{
  label: 'Billing',
  icon: 'i-lucide-credit-card',
  to: '/dashboard/billing'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  to: '/dashboard/settings'
}], [{
  label: 'Log out',
  icon: 'i-lucide-log-out',
  onSelect: (e?: Event) => {
    e?.preventDefault()
    logoutAndRedirect()
  }
}]]))
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{ align: 'center', collisionPadding: 12 }"
    :ui="{ content: collapsed ? 'w-48' : 'w-(--reka-dropdown-menu-trigger-width)' }"
  >
    <UButton
      v-bind="{
        ...user,
        label: collapsed ? undefined : user?.userName,
        trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down'
      }"
      color="neutral"
      variant="ghost"
      block
      :square="collapsed"
      class="data-[state=open]:bg-(--ui-bg-elevated)"
      :ui="{
        trailingIcon: 'text-(--ui-text-dimmed)'
      }"
    />

    <template #chip-leading="{ item }">
      <span
        :style="{ '--chip': `var(--color-${(item as any).chip}-400)` }"
        class="ms-0.5 size-2 rounded-full bg-(--chip)"
      />
    </template>
  </UDropdownMenu>
</template>
