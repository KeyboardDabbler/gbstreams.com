<template>
    <section>
        <nav class="flex justify-between p-2 px-4 xl:px-20 border-b-1 border-gray-400 border-opacity-40">
            <div class="flex justify-between items-center w-full">
                <div class="xl:w-1/3">
                    <NuxtLink class="block max-w-max">
                        <img class="h-9" src="~/assets/img/banner-light.png" alt="GBstreams logo">
                    </NuxtLink>
                </div>
                <div class="hidden md:block xl:w-1/3">
                    <div class="flex items-center justify-end">
                        <NuxtLink to="/login"
                            class="inline-block py-2 px-4 leading-5 decoration-yellow decoration-2 underline-offset-8 hover:underline bg-transparent font-medium rounded-md">
                            Login Page
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <button class="self-center md:hidden">
                <Icon name="ic:baseline-menu" size="35px" />
            </button>
        </nav>
    </section>
</template>
