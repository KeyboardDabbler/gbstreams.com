<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h5
    :id="id"
    class="relative mt-6 mb-2 text-lg"
  >
    <a
      :href="`#${id}`"
      class="inline-flex items-center group"
    >
      <span class="hidden pr-2 text-yellow group-hover:inline-block">
        #
      </span>
      <slot />
    </a>
  </h5>
</template>
