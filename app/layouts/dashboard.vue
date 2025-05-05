<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const route = useRoute()
const toast = useToast()

const open = ref(false)

const links = [[{
  label: 'Home',
  icon: 'i-lucide-house',
  to: '/dashboard',
  onSelect: () => {
    open.value = false
  }
}, {
  label: 'Requests',
  icon: 'i-lucide-sparkles',
  to: '/dashboard/inbox',
  onSelect: () => {
    open.value = false
  }
}, {
  label: 'Profile',
  to: '/dashboard/profile',
  icon: 'i-lucide-user',
  children: [{
    label: 'General',
    to: '/dashboard/profile',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Subscription',
    to: '/dashboard/profile/subscription',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Inbox',
    to: '/dashboard/profile/inbox',
    badge: '4',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Logs',
    to: '/dashboard/profile/logs',
    onSelect: () => {
      open.value = false
    }
  }]
}, {
  label: 'Settings',
  to: '/dashboard/settings',
  icon: 'i-lucide-settings',
  children: [{
    label: 'General',
    to: '/dashboard/settings',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Notifications',
    to: '/dashboard/settings/notifications',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Security',
    to: '/dashboard/settings/security',
    onSelect: () => {
      open.value = false
    }
  }]
}, {
  label: 'Admin',
  to: '/dashboard/admin',
  icon: 'i-lucide-settings',
  defaultOpen: true,
  children: [{
    label: 'General',
    to: '/dashboard/admin',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Members',
    to: '/dashboard/admin/members',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Inbox',
    to: '/dashboard/admin/inbox',
    badge: '4',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Notifications',
    to: '/dashboard/admin/notifications',
    onSelect: () => {
      open.value = false
    }
  }]
}, {
  label: 'Setup Wizard',
  icon: 'i-lucide-wand-sparkles',
  to: '/dashboard/wizard',
  onSelect: () => {
    open.value = false
  }
}, {
  label: 'Apps',
  icon: 'i-lucide-monitor-down',
  to: '/dashboard/clients',
  onSelect: () => {
    open.value = false
  }
}], [{
  label: 'Web Player',
  icon: 'i-lucide-play-circle',
  to: 'https://play.gbstreams.com',
  target: '_blank'
}, {
  label: 'Request & Report',
  icon: 'i-lucide-file-plus',
  to: 'https://request.gbstreams.com',
  target: '_blank'
}, {
  label: 'FAQ',
  icon: 'i-lucide-help-circle',
  to: '/dashboard/faq',
  onSelect: () => {
    open.value = false
  }
}]]

const userStore = useUserStore()

const filteredLinks = computed(() => {
  // Remove Admin menu if not admin
  return [
    links[0].filter(link => link.label !== 'Admin' || userStore.isAdmin),
    links[1]
  ]
})

const groups = computed(() => [{
  id: 'links',
  label: 'Go to',
  items: links.flat()
}, {
  id: 'code',
  label: 'Code',
  items: [{
    id: 'source',
    label: 'View page source',
    icon: 'i-simple-icons-github',
    to: `https://github.com/KeyboardDabbler/gbstreams.com/tree/homepage/app/pages${route.path === '/dashboard' ? '/dashboard/index' : route.path}.vue`,
    target: '_blank'
  }]
}])

onMounted(async () => {
  const cookie = useCookie('cookie-consent')
  if (cookie.value === 'accepted') {
    return
  }

  toast.add({
    title: 'We use first-party cookies to enhance your experience on our website.',
    duration: 0,
    close: false,
    actions: [{
      label: 'Accept',
      color: 'neutral',
      variant: 'outline',
      onClick: () => {
        cookie.value = 'accepted'
      }
    }, {
      label: 'Opt out',
      color: 'neutral',
      variant: 'ghost'
    }]
  })
})
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      collapsible
      resizable
      class="bg-(--ui-bg-elevated)/25"
      :ui="{ footer: 'lg:border-t lg:border-(--ui-border)' }"
    >
      <template #header="{ collapsed }">
        <NavLogo :collapsed="collapsed" />
      </template>

      <template #default="{ collapsed }">
        <UDashboardSearchButton
          :collapsed="collapsed"
          class="bg-transparent ring-(--ui-border)"
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="filteredLinks[0]"
          orientation="vertical"
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="filteredLinks[1]"
          orientation="vertical"
          class="mt-auto"
        />
      </template>

      <template #footer="{ collapsed }">
        <NavUserMenu :collapsed="collapsed" />
      </template>
    </UDashboardSidebar>

    <UDashboardSearch :groups="groups" />

    <slot />

    <NotificationsSlideover />
  </UDashboardGroup>
</template>
