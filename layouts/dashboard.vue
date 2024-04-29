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
}, {
  id: 'request',
  label: 'Request',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://request.gbstreams.com',
  target: '_blank',
  tooltip: {
    text: 'Request'
  }
}, {
  id: 'webApp',
  label: 'Web App',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://play.gbstreams.com',
  target: '_blank',
  tooltip: {
    text: 'Web app'
  }
}, {
  id: 'settings',
  label: 'Settings',
  to: '/dashboard/settings',
  icon: 'i-heroicons-cog-8-tooth',
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

const supportLinks = [{
  id: 'support',
  label: 'Support',
  icon: 'i-heroicons-question-mark-circle',
  collapsible: false,
  children: [{
    label: 'Clients',
    to: '/dashboard/clients',
    exact: true
  }, {
    label: 'Documentation',
    to: '/docs'
  }, {
    label: 'Inbox',
    to: '/dashboard/inbox'
  }, {
    label: 'Setup wizard',
    to: '/dashboard/wizard'
  }],
  tooltip: {
    text: 'Support'
  }
}]

const adminLinks = [{
  id: 'admin',
  label: 'Admin',
  icon: 'i-heroicons-user-group',
  collapsible: true,
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

        <UDivider />

        <UDashboardSidebarLinks :links="supportLinks" />

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

    <!-- ~/components/HelpSlideover.vue -->
    <HelpSlideover />
    <!-- ~/components/NotificationsSlideover.vue -->
    <NotificationsSlideover />

    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>
