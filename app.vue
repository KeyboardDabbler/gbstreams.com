<template>
  <div class="text-gray-400"
    >
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
