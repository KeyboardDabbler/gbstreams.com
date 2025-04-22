<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { ref } from 'vue'
import AuthLogoutCard from '~/components/auth/AuthLogoutCard.vue'

defineProps<{
  collapsed?: boolean
}>()

const user = ref({
  name: 'Benjamin Canac',
  avatar: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'Benjamin Canac'
  }
})

const logoutCardRef = ref<InstanceType<typeof AuthLogoutCard> | null>(null)

function handleLogout() {
  logoutCardRef.value?.logout()
}

const items = computed<DropdownMenuItem[][]>(() => ([[{
  type: 'label',
  label: user.value.name,
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
  click: handleLogout
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
        label: collapsed ? undefined : user?.name,
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
  <AuthLogoutCard
    ref="logoutCardRef"
    style="display:none"
  />
</template>
