<template>
    <div class="flex flex-col min-h-screen">
        <NavDefaultHeader :button="'Login Page'" :buttonLink="'/auth/login'" />
        <div class="flex-1 w-full flex flex-col">
            <div class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full">
                <SectionFeaturesList />
            </div>
        </div>
        <NavFooter />
    </div>
</template>
