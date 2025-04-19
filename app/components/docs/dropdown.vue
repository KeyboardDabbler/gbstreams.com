<script setup lang="ts">
onMounted(() => {
  if (process.client)
    document.querySelector('body').style.overflowY = 'hidden'
})

onUnmounted(() => {
  if (process.client)
    document.querySelector('body').style.overflowY = 'visible'
})
</script>

<template>
  <div ref="el" class="fixed z-50 top-0 left-0 w-screen h-screen pl-6 shadow dropdown bg-forg">
    <slot />
    <DocsAside />
  </div>
</template>
