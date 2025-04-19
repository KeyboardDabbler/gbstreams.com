<script>
definePageMeta({
    layout: "dashboard",
});
</script>

<template>
    <UContainer class="container">
        <div class="mb-6">
            <div class="max-w-8xl mx-auto px-4">
                <NavProfileHeader :button="'Edit Settings'" :buttonLink="'/dashboard/settings/general'" />
                <StatsUserStats />
            </div>
        </div>
        <div class="m-6 pt-6">
            <StatsUserWatchHistory />
        </div>
    </UContainer>
</template>
