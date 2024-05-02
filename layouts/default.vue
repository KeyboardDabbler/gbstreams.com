<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
const { isHelpSlideoverOpen } = useDashboard()

const links = [{
  id: 'home',
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/dashboard',
  tooltip: {
    text: 'Home'
  }
}]

const settingsLinks = [{
  id: 'settings',
  label: 'Settings',
  to: '/dashboard/settings',
  icon: 'i-heroicons-cog-8-tooth',
  defaultOpen: route.path.startsWith('/dashboard/settings'),
  children: [{
    label: 'General',
    to: '/dashboard/settings',
    exact: true
  }, {
    label: 'Notifications',
    to: '/dashboard/settings/notifications'
  }, {
    label: 'Refferals',
    to: '/dashboard/settings/refferals'
  }, {
    label: 'Subscription',
    to: '/dashboard/settings/subscription'
  }],
  tooltip: {
    text: 'Settings'
  }
}]

const externalLinks = [{
  id: 'request',
  label: 'Request & Report',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://request.gbstreams.com',
  target: '_blank',
  tooltip: {
    text: 'Request'
  }
}, {
  id: 'webApp',
  label: 'Web Player',
  icon: 'i-heroicons-tv',
  to: 'https://play.gbstreams.com',
  target: '_blank',
  tooltip: {
    text: 'Web app'
  }
}]

const supportLinks = [{
  id: 'support',
  label: 'Support',
  icon: 'i-heroicons-question-mark-circle',
  collapsible: false,
  children: [{
    label: 'Client Downloads',
    to: '/dashboard/clients',
    exact: true
  }, {
    label: 'Inbox',
    to: '/dashboard/inbox'
  }, {
    label: 'Setup Wizard',
    to: '/dashboard/wizard'
  }],
  tooltip: {
    text: 'Support'
  }
}, {
  id: 'documentaion',
  label: 'Documentaion',
  icon: 'i-heroicons-book-open',
  defaultOpen: route.path.startsWith('/dashboard/docs'),
  children: [{
    label: 'Introduction',
    to: '/dashboard/docs/introduction',
    exact: true
  }, {
    label: 'Request & Report',
    to: '/dashboard/docs/request'
  }, {
    label: 'FAQ',
    to: '/dashboard/docs/faq'
  }],
  tooltip: {
    text: 'documentaion'
  }
}]

const adminLinks = [{
  id: 'admin',
  label: 'Admin',
  icon: 'i-heroicons-user-group',
  defaultOpen: route.path.startsWith('/dashboard/admin'),
  tooltip: {
    text: 'Admin'
  }
}]
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="250"
      :resizable="{ min: 200, max: 300 }"
      collapsible
    >
      <UDashboardNavbar
        class="!border-transparent"
        :ui="{ left: 'flex-1' }"
      >
        <template #left>
          <NavLogo image-class="h-9 w-auto" />
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="links" />

        <UDashboardSidebarLinks :links="settingsLinks" />

        <UDivider />

        <UDashboardSidebarLinks :links="externalLinks" />

        <UDivider />

        <UDashboardSidebarLinks :links="supportLinks" />

        <UDashboardSidebarLinks :links="docLinks" />

        <UDivider />

        <UDashboardSidebarLinks :links="adminLinks" />

        <div class="flex-1" />

        <UDivider class="sticky bottom-0" />

        <template #footer>
          <NavUserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <ClientOnly>
      <LazyUDashboardSearch />
    </ClientOnly>
  </UDashboardLayout>
</template>
