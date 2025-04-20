<script setup lang="ts">
defineProps<{
  collapsed?: boolean
}>()
</script>

<template>
  <div class="flex items-center justify-center w-full py-4">
    <NuxtImg
      v-if="!collapsed"
      provider="cloudinary"
      src="/branding/banner-light_xgac6g.png"
      alt="GBstreams logo"
      class="h-12 transition-all duration-200"
    />
    <NuxtImg
      v-else
      provider="cloudinary"
      src="/branding/web/favicon-32x32_qxcvvr.png"
      alt="GBstreams Icon"
      class="h-8 transition-all duration-200"
    />
  </div>
</template>
