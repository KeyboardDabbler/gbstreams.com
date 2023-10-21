<template>
    <div class="flex flex-col min-h-screen">
        <NavDefaultHeader :button="'Homepage'" :buttonLink="'/'" />
        <section class="flex flex-1 flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full">
            <div class="relative flex flex-col items-center justify-center text-center">
                <!--  
            <a class="inline-block mb-6" href="#">
                <NuxtImg provider="cloudinary" src="/branding/banner-light_xgac6g.png" alt="GBstreams logo" class="h-16" />
            </a>
        -->
                <span class="text-white text-2xl font-semibold mb-6">{{ $attrs.pageMessgae }}</span>
            </div>
            <div class="w-full rounded md:mt-0 sm:max-w-md xl:p-0 md:shadow bg-transparent md:border md:border-gray-700">
                <slot />
            </div>
            <div v-if="$route.path === '/auth/login'"
                class="relative flex flex-col items-center justify-center text-center">
                <p class="my-6 text-sm font-bold sm:px-16 lg:px-48">If you were sent here
                    by a friend, please request access or if you have an invite code, please click Get Started!</p>
                <div class="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-3">
                    <NuxtLink to="/auth/signup">
                        <button
                            class="flex items-center px-4 py-2 text-sm border leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 disabled:opacity-50 whitespace-nowrap text-white border-indigo-500 bg-indigo-600 bg-opacity-80 hover:bg-opacity-100 hover:border-indigo-500 focus:border-indigo-700 focus:ring-indigo active:bg-opacity-100 active:border-indigo-700">Get
                            Started
                            <Icon name="fa6-solid:arrow-right" size="15px" class="ml-2" />
                        </Button>
                    </NuxtLink>
                    <span class="inline-flex items-center justify-center"> or </span>
                    <NuxtLink to="/auth/request">
                        <button
                            class="flex items-center px-4 py-2 text-sm rounded-md border leading-5 focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-white bg-transparent border-gray-600 hover:border-gray-200 focus:border-gray-100 active:border-gray-100">Request
                            Access</Button>
                    </NuxtLink>
                </div>
            </div>
            <div v-if="$route.path !== '/auth/login'"
                class="relative flex flex-col items-center justify-center text-center my-6">
                <div class="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-3">
                    <NuxtLink to="/auth/login">
                        <button
                            class="flex items-center px-4 py-2 text-sm rounded-md border leading-5 focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-white bg-transparent border-gray-600 hover:border-gray-200 focus:border-gray-100 active:border-gray-100">Back</Button>
                    </NuxtLink>
                </div>
            </div>
        </section>
        <NavFooter />
    </div>
</template>
