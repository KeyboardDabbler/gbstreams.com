<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const links = [[{
  label: 'General',
  icon: 'i-lucide-user',
  to: '/dashboard/profile',
  exact: true
}, {
  label: 'Subscription',
  icon: 'i-lucide-credit-card',
  to: '/dashboard/profile/subscription'
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  to: '/dashboard/profile/inbox'
}, {
  label: 'Logs',
  icon: 'i-lucide-logs',
  to: '/dashboard/profile/logs'
}]]
</script>

<template>
  <UDashboardPanel
    id="profile"
    :ui="{ body: 'lg:py-12' }"
  >
    <template #header>
      <UDashboardNavbar title="Profile">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <!-- NOTE: The `-mx-1` class is used to align with the `DashboardSidebarCollapse` button here. -->
        <UNavigationMenu
          :items="links"
          highlight
          class="-mx-1 flex-1"
        />
      </UDashboardToolbar>
    </template>

    <template #body>
      <NuxtPage />
    </template>
  </UDashboardPanel>
</template>
