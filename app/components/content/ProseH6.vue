<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h6
    :id="id"
    class="relative mt-4 mb-1"
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
  </h6>
</template>
