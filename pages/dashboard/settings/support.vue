<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <NuxtLayout>
    <main class="container px-4 focus:outline-none">
      <div class="mb-6">
        <div class="max-w-8xl mx-auto px-4">
          <NavProfileHeader :button="'View Profile'" :buttonLink="'/dashboard/settings/general'" />
          <NavProfileSettings />
          <section>
            <ProfileSupport />
          </section>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>