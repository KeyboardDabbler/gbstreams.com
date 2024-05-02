<script setup lang="ts">

</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar />
      <UDashboardPanelContent class="pb-24">
        <UContainer class="p-6">
          <div class="md:max-w-4xl mb-10 mx-auto text-center">
            <UBadge
              label="Setup"
              variant="soft"
              :ui="{ rounded: 'rounded-full', font: 'uppercase' }"
            />
            <h1 class="my-3 text-gray-200 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
              Setup Wizard
            </h1>
            <p class="text-lg md:text-xl font-medium">
              Follow the simple instructions and you'll be able to start
              watching on <span class="text-primary font-bold">GBstreams</span>
            </p>
          </div>
          <SectionWizardCard />
        </UContainer>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
