<template>
    <section>
        <nav class="flex justify-between p-2 px-4 xl:px-20 border-b-1 border-gray-400 border-opacity-40">
            <div class="flex justify-between items-center w-full">
                <div class="xl:w-1/3">
                    <NuxtLink class="block max-w-max">
                        <NuxtImg provider="cloudinary" src="/branding/banner-light_xgac6g.png" alt="GBstreams logo" class="h-9" />
                    </NuxtLink>
                </div>
                <div class="block xl:w-1/3">
                    <div class="flex items-center justify-end">
                        <NuxtLink :to="$attrs.buttonLink"
                            class="inline-block py-2 px-4 leading-5 decoration-yellow decoration-2 underline-offset-8 hover:underline bg-transparent font-medium rounded-md">
                            {{ $attrs.button }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>
