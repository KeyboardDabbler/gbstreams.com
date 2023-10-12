<script>
definePageMeta({
    layout: "dashboard",
});
</script>

<template>
    <NuxtLayout>
        <section class="container p-6 mx-auto md:max-w-4xl">
            <div class="px-4 py-2 md:max-w-4xl mb-4 mx-auto text-center">
                <span
                    class="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow bg-forg font-medium uppercase rounded-full shadow-sm">Apps</span>
                <h1 class="mb-4 text-gray-200 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Client Apps
                </h1>
                <p class="text-lg md:text-xl font-medium">Follow the simple instructions and you'll be able to start
                    watching on <span class="text-yellow font-bold">GBstreams</span></p>
            </div>
            <SectionClientList />
        </section>
    </NuxtLayout>
</template>
