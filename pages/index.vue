
import FeaturesList from '~~/components/FeaturesList.vue';

<template>
    <div class="flex flex-col min-h-screen">
        <NavFeaturesHeader />
        <div class="flex-1 w-full flex flex-col">
            <div class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full">
                <FeaturesList />
            </div>
        </div>
        <NavTheFooter />
    </div>
</template>
