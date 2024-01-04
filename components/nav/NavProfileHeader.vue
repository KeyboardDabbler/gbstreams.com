<template>
    <div class="relative z-40 mt-6 mb-12 lg:flex lg:items-end lg:justify-between lg:space-x-5">
        <div class="flex items-end justify-items-end space-x-5">
            <div class="flex-shrink-0">
                <div class="relative">
                    <NuxtImg provider="cloudinary" src="/img/whiteFingerprint_tgf96x.png" alt="User avatar"
                        class="h-24 w-24 rounded-full bg-gray-600 object-cover ring-1 ring-gray-700" />
                    <span class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></span>
                </div>
            </div>
            <div class="pt-1.5">
                <h1 class="mb-1 flex flex-col sm:flex-row sm:items-center">
                    <a class="text-overseerr text-lg font-bold hover:to-purple-200 sm:text-2xl" href="">GBstreams</a>
                </h1>
                <p class="text-xs sm:text-sm font-medium text-gray-400">Joined August 26, 2023</p>
                <div class="mb-2 mt-2 text-sm font-medium leading-5 text-gray-400">
                    <div class="flex max-w-lg items-center">
                        <span
                            class="px-2 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full whitespace-nowrap cursor-default bg-indigo-500 bg-opacity-80 border border-indigo-500 !text-indigo-100">GBstreams
                            User</span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse lg:flex-row lg:justify-end lg:space-y-0 lg:space-x-3 lg:space-x-reverse">
            <NuxtLink :to="$attrs.buttonLink"
                class="inline-flex items-center justify-center border leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-gray-200 bg-gray-800 bg-opacity-80 border-gray-600 hover:text-white hover:bg-gray-700 hover:border-gray-600 group-hover:text-white group-hover:bg-gray-700 group-hover:border-gray-600 focus:border-blue-300 focus:ring-blue active:text-gray-200 active:bg-gray-700 active:border-gray-600 px-4 py-2 text-sm button-md">
                <span class="flex items-center">
                    <div v-if="$route.path === '/dashboard/profile'"
                    class="mr-2">
                        <Icon name="mdi:account" size="16px" />
                    </div>
                    <div v-if="$route.path !== '/dashboard/profile'"
                    class="mr-2">
                        <Icon name="mdi:cog" size="16px" />                
                    </div>
                    <span>{{ $attrs.button }}</span>
                </span>
            </NuxtLink>
        </div>
    </div>
</template>
