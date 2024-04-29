<script setup lang="ts">
const links = [[{
  label: 'General',
  icon: 'i-heroicons-user-circle',
  to: '/dashboard/settings',
  exact: true
}, {
  label: 'Notifications',
  icon: 'i-heroicons-bell',
  to: '/dashboard/settings/notifications'
}, {
  label: 'Refferals',
  icon: 'i-heroicons-user-group',
  to: '/dashboard/settings/refferals'
}, {
  label: 'Subscription',
  icon: 'i-heroicons-credit-card',
  to: '/dashboard/settings/subscription'
}]]
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Settings" />

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
