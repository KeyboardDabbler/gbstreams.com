<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h2 :id="id" class="relative mt-10 mb-4 text-3xl">
    <a :href="`#${id}`" class="inline-flex items-center group">
      <span class="hidden pr-2 text-yellow group-hover:inline-block">#</span>
      <slot />
    </a>
  </h2>
</template>
