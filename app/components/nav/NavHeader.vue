<template>
  <UHeader
    :ui="{
      toggle: 'hidden'
    }"
  >
    <template #title>
      <NavLogo class="h-9 w-auto" />
    </template>

    <template #right>
      <div v-if="$route.path !== '/dashboard/wizard'">
        <NuxtLink
          :to="$attrs.route"
          class="decoration-yellow-1 decoration-2 underline-offset-8 hover:underline bg-transparent font-medium rounded-md"
        >
          {{ $attrs.button }}
        </NuxtLink>
      </div>
    </template>
  </UHeader>
</template>
