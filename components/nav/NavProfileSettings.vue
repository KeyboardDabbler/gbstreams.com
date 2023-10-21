<template>
    <div class="container px-4 py-2 mx-auto border-b-1 border-gray-400 border-opacity-40">
        <nav class="flex">
            <NuxtLink to="/dashboard/settings/general" class="px-1 py-4 ml-8 text-sm font-medium leading-5 transition duration-300 border-b-2 border-transparent whitespace-nowrap" >
                General
            </NuxtLink>
            <NuxtLink to="/dashboard/settings/refferals" class="px-1 py-4 ml-8 text-sm font-medium leading-5 transition duration-300 border-b-2 border-transparent whitespace-nowrap">
                Refferals
            </NuxtLink>
            <NuxtLink to="/dashboard/settings/subscription" class="px-1 py-4 ml-8 text-sm font-medium leading-5 transition duration-300 border-b-2 border-transparent whitespace-nowrap">
                Subscription
            </NuxtLink>
            <NuxtLink to="/dashboard/settings/support" class="px-1 py-4 ml-8 text-sm font-medium leading-5 transition duration-300 border-b-2 border-transparent whitespace-nowrap">
                Support
            </NuxtLink>
        </nav>
    </div>
</template>

<style scoped>
.router-link-active {
    @apply first:ml-0 text-indigo-500 border-indigo-600;
  }
  .router-link-active:hover {
    @apply hover:text-gray-300 hover:border-gray-400 focus:text-gray-300 focus:border-gray-400;
  }
</style>
