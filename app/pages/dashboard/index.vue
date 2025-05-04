<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const { isNotificationsSlideoverOpen } = useDashboard()

const links = ref([
  {
    label: 'Complete Subscription',
    to: '/dashboard/profile/billing',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UDashboardPanel id="home">
    <template #header>
      <UDashboardNavbar
        title="Home"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>

        <template #right>
          <UTooltip
            text="Notifications"
            :shortcuts="['N']"
          >
            <UButton
              color="neutral"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip
                color="error"
                inset
              >
                <UIcon
                  name="i-lucide-bell"
                  class="size-5 shrink-0"
                />
              </UChip>
            </UButton>
          </UTooltip>
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UPageSection
        title="You're one step closer to streaming"
        description="Don't miss out on great movies and series. Explore the latest releases and find your next favorite."
        icon="i-custom-gbstreams-stacked"
        orientation="horizontal"
        :links="links"
        :ui="{ leadingIcon: 'size-32' }"
      />
    </template>
  </UDashboardPanel>
</template>
