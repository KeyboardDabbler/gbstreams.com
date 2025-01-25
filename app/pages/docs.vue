<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = computed(() => navigation.value.find(item => item._path === '/docs')?.children ?? [])
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
  </NuxtLayout>
</template>