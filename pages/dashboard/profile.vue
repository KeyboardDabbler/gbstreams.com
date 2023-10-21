<script>
definePageMeta({
    layout: "dashboard",
});
</script>

<template>
    <NuxtLayout>
        <main class="container px-4 focus:outline-none">
            <div class="mb-6">
                <div class="max-w-8xl mx-auto px-4">
                    <NavProfileHeader :button="'Edit Settings'" :buttonLink="'/dashboard/settings/general'"/>
                    <StatsUserStats />
                </div>
            </div>
            <div class="m-6 pt-6">
                <StatsUserWatchHistory />
            </div>
        </main>
    </NuxtLayout>
</template>