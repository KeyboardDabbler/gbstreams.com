<template>
    <section>
        <nav class="flex justify-between p-2 px-4 xl:px-20 border-b-1 border-gray-400 border-opacity-40">
            <div class="flex justify-between items-center w-full">
                <div class="xl:w-1/3">
                    <NuxtLink class="block max-w-max">
                        <NuxtImg provider="cloudinary" src="/branding/banner-light_xgac6g.png" alt="GBstreams logo" class="h-9" />
                    </NuxtLink>
                </div>
                <button class="self-center md:hidden">
                    <Icon name="ic:baseline-menu" size="35px" />
                </button>
                <div class="hidden md:block">
                    <div class="flex items-center justify-end">
                        <NuxtLink to="/dashboard/clients"
                            class="inline-block py-2 px-4 leading-5 decoration-yellow decoration-2 underline-offset-8 hover:underline bg-transparent font-medium rounded-md">
                            Clients
                        </NuxtLink>
                        <NuxtLink to="/docs/introduction"
                            class="inline-block py-2 px-4 leading-5 decoration-yellow decoration-2 underline-offset-8 hover:underline bg-transparent font-medium rounded-md">
                            Documentation
                        </NuxtLink>

                        <NuxtLink to="https://request.gbstreams.com"
                            class="inline-block py-2 px-4 leading-5 decoration-yellow decoration-2 underline-offset-8 hover:underline bg-transparent font-medium rounded-md">
                            Request
                            <Icon name="ic:baseline-open-in-new" size="15px" />
                        </NuxtLink>

                        <NuxtLink to="https://play.gbstreams.com"
                            class="inline-block py-2 px-4 leading-5 decoration-yellow decoration-2 underline-offset-8 hover:underline bg-transparent font-medium rounded-md">
                            Web App
                            <Icon name="ic:baseline-open-in-new" size="15px" />
                        </NuxtLink>

                        <NuxtLink to="/dashboard/profile"
                            class="inline-block py-2 px-4 leading-5 text-base text-black font-medium text-center bg-yellow hover:bg-yellowf focus:ring-2 focus:ring-bluer focus:ring-opacity-50 rounded-md shadow-sm">
                            Dashboard
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>

<style scoped>
.router-link-exact-active {
    @apply decoration-yellow decoration-2 underline-offset-8 underline;
}
</style>
