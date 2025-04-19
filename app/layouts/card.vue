<template>
  <div class="flex flex-col min-h-screen">
    <NavDefaultHeader />
    <section class="flex flex-1 flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full">
      <div class="">
        <UPageCard
          variant="subtle"
          class="
          max-w-sm
          w-full"
        >
          <slot />
        </UPageCard>
      </div>
      <div
        v-if="$route.path === '/auth/login'"
        class="relative flex flex-col items-center justify-center text-center"
      >
        <p class="my-6 text-sm font-bold sm:px-16 lg:px-48">
          If you were sent here
          by a friend, please request access or if you have an invite code, please click Get Started!
        </p>
        <div class="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-3">
          <UButton
            label="Get Started"
            to="/auth/signup"
            icon="i-heroicons-arrow-long-right-16-solid"
            size="sm"
            color="primary"
            variant="subtle"
            trailing
          />
          <span class="inline-flex items-center justify-center"> - or - </span>
          <UButton
            label="Request Access"
            to="/auth/request"
            color="primary"
            variant="outline"
          />
        </div>
      </div>
      <div
        v-if="$route.path !== '/auth/login'"
        class="relative flex flex-col items-center justify-center text-center my-6"
      >
        <div class="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-3">
          <UButton
            :to="$route.path === '/dashboard/wizard' ? '/docs/introduction' : '/auth/login'"
            icon="i-heroicons-arrow-long-left-16-solid"
            size="sm"
            color="primary"
            variant="subtle"
            label="Go Back"
          />
        </div>
      </div>
    </section>
    <NavFooter />
  </div>
</template>
