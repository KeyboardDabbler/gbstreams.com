<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h3 :id="id" class="relative mt-8 mb-3 text-2xl">
    <a :href="`#${id}`" class="inline-flex items-center group">
      <span class="hidden pr-2 text-yellow group-hover:inline-block">
        #
      </span>
      <slot />
    </a>
  </h3>
</template>
