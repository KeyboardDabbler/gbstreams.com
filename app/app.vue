<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

const { loggedIn } = useAuth()

watch(loggedIn, (val) => {
  if (!val) {
    navigateTo('/auth/login')
  }
})
</script>

<template>
  <Html
    class="scheme-only-dark scrollbar-thin"
    dir="ltr"
  >
    <Body class="antialiased duration-300 transition-colors">
      <NuxtLoadingIndicator />
      <UApp>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UApp>
    </Body>
  </Html>
</template>
