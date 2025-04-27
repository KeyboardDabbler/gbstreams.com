<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const links = [[{
  label: 'General',
  icon: 'i-lucide-user',
  to: '/dashboard/settings',
  exact: true
}, {
  label: 'Members',
  icon: 'i-lucide-users',
  to: '/dashboard/settings/members'
}, {
  label: 'Notifications',
  icon: 'i-lucide-bell',
  to: '/dashboard/settings/notifications'
}, {
  label: 'Security',
  icon: 'i-lucide-shield',
  to: '/dashboard/settings/security'
}]]
</script>

<template>
  <UDashboardPanel
    id="admin"
    :ui="{ body: 'lg:py-12' }"
  >
    <template #header>
      <UDashboardNavbar title="Admin">
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
