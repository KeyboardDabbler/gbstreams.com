<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <main class="container px-4 focus:outline-none">
    <div class="mb-6">
      <div class="max-w-8xl mx-auto px-4">
        <NavProfileHeader
          :button="'View Profile'"
          :button-link="'/dashboard/settings/general'"
        />
        <NavProfileSettings />
        <section>
          <ProfileReferrals />
        </section>
      </div>
    </div>
  </main>
</template>
