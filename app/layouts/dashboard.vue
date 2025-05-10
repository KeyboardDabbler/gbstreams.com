<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { useInboxStore } from '@/stores/inbox'

const route = useRoute()
const toast = useToast()

const open = ref(false)

const userStore = useUserStore()
const inboxStore = useInboxStore()
const unreadCount = computed(() => inboxStore.messages.filter(m => !m.is_read && m.receiver_id === userStore.userName).length)

watch(unreadCount, (val) => {
  console.debug('[dashboard.vue] unreadCount changed:', val)
})

// Admin inbox unread count
const adminInboxList = ref<any[]>([])
const adminUnreadCount = computed(() => adminInboxList.value.filter(mail => mail.unread).length)

let adminInboxInterval: ReturnType<typeof setInterval> | null = null

async function fetchAdminInboxList() {
  if (userStore.isAdmin) {
    const { data } = await useFetch('/api/admin/inbox-list', { default: () => [] })
    adminInboxList.value = data.value || []
  }
}

async function handleInboxSelect() {
  open.value = false
  // Mark all messages as read (or trigger a fetch that marks as read)
  await inboxStore.fetchMessages(true)
}

const links = computed(() => [[
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/dashboard',
    onSelect: () => { open.value = false }
  },
  {
    label: 'Requests',
    icon: 'i-lucide-sparkles',
    to: '/dashboard/inbox',
    onSelect: () => { open.value = false }
  },
  {
    label: 'Profile',
    to: '/dashboard/profile',
    icon: 'i-lucide-user',
    children: [
      {
        label: 'General',
        to: '/dashboard/profile',
        exact: true,
        onSelect: () => { open.value = false }
      },
      {
        label: 'Subscription',
        to: '/dashboard/profile/subscription',
        onSelect: () => { open.value = false }
      },
      {
        label: 'Inbox',
        to: '/dashboard/profile/inbox',
        badge: unreadCount.value > 0 ? String(unreadCount.value) : '',
        onSelect: handleInboxSelect
      },
      {
        label: 'Logs',
        to: '/dashboard/profile/logs',
        onSelect: () => { open.value = false }
      }
    ]
  },
  {
    label: 'Settings',
    to: '/dashboard/settings',
    icon: 'i-lucide-settings',
    children: [
      {
        label: 'General',
        to: '/dashboard/settings',
        exact: true,
        onSelect: () => { open.value = false }
      },
      {
        label: 'Notifications',
        to: '/dashboard/settings/notifications',
        onSelect: () => { open.value = false }
      },
      {
        label: 'Security',
        to: '/dashboard/settings/security',
        onSelect: () => { open.value = false }
      }
    ]
  },
  {
    label: 'Admin',
    to: '/dashboard/admin',
    icon: 'i-lucide-settings',
    defaultOpen: true,
    children: [
      {
        label: 'General',
        to: '/dashboard/admin',
        exact: true,
        onSelect: () => { open.value = false }
      },
      {
        label: 'Members',
        to: '/dashboard/admin/members',
        onSelect: () => { open.value = false }
      },
      {
        label: 'Inbox',
        to: '/dashboard/admin/inbox',
        badge: adminUnreadCount.value > 0 ? String(adminUnreadCount.value) : '',
        onSelect: () => { open.value = false }
      },
      {
        label: 'Notifications',
        to: '/dashboard/admin/notifications',
        onSelect: () => { open.value = false }
      }
    ]
  },
  {
    label: 'Setup Wizard',
    icon: 'i-lucide-wand-sparkles',
    to: '/dashboard/wizard',
    onSelect: () => { open.value = false }
  },
  {
    label: 'Apps',
    icon: 'i-lucide-monitor-down',
    to: '/dashboard/clients',
    onSelect: () => { open.value = false }
  }
], [
  {
    label: 'Web Player',
    icon: 'i-lucide-play-circle',
    to: 'https://play.gbstreams.com',
    target: '_blank'
  },
  {
    label: 'Request & Report',
    icon: 'i-lucide-file-plus',
    to: 'https://request.gbstreams.com',
    target: '_blank'
  },
  {
    label: 'FAQ',
    icon: 'i-lucide-help-circle',
    to: '/dashboard/faq',
    onSelect: () => { open.value = false }
  }
]])

const filteredLinks = computed(() => {
  // Remove Admin menu if not admin
  return [
    links.value[0].filter(link => link.label !== 'Admin' || userStore.isAdmin),
    links.value[1]
  ]
})

const groups = computed(() => [{
  id: 'links',
  label: 'Go to',
  items: links.value.flat()
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
  // Always fetch messages and init websocket if user is logged in
  if (userStore.userName) {
    await inboxStore.fetchMessages(false)
    inboxStore.initWebSocket(userStore.userName)
  }

  // Fetch admin inbox list for badge
  fetchAdminInboxList()
  if (userStore.isAdmin) {
    adminInboxInterval = setInterval(fetchAdminInboxList, 5000)
  }

  // Cookie consent logic
  const cookie = useCookie('cookie-consent')
  if (cookie.value !== 'accepted') {
    toast.add({
      title: 'We use first-party cookies to enhance your experience on our website.',
      duration: 0,
      close: false,
      actions: [{
        label: 'Accept',
        color: 'neutral',
        variant: 'outline',
        onClick: () => { cookie.value = 'accepted' }
      }, {
        label: 'Opt out',
        color: 'neutral',
        variant: 'ghost'
      }]
    })
  }
})

watch(() => userStore.userName, async (newUser, oldUser) => {
  if (newUser && newUser !== oldUser) {
    await inboxStore.fetchMessages(false)
    inboxStore.initWebSocket(newUser)
  }
})

onUnmounted(() => {
  if (adminInboxInterval) clearInterval(adminInboxInterval)
  if (inboxStore.ws && inboxStore.wsStatus === 'OPEN') {
    inboxStore.ws.close()
  }
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
