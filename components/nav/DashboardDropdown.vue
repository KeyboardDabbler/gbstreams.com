<script setup lang="ts">
onMounted(() => {
    if (process.client)
        document.querySelector('body').style.overflowY = 'hidden'
})

onUnmounted(() => {
    if (process.client)
        document.querySelector('body').style.overflowY = 'visible'
})
</script>

<template>
    <div ref="el" class="fixed z-50 top-0 left-0 w-screen h-screen pl-6 shadow dropdown bg-forg">
        <slot />
        <div class="flex flex-col items-center justify-end">
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

            <NuxtLink to="#" class="inline-block py-2 px-4 leading-5">
                <Icon name="mdi:logout" size="25px" />
            </NuxtLink>
        </div>
    </div>
</template>
