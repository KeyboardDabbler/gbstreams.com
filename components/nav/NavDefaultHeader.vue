<template>
    <UHeader>
        <template #logo>
            <NavLogo image-class="h-9 w-auto" />
        </template>

        <template #right>
            <div v-if="$route.path !== '/dashboard/wizard'">
                <NuxtLink :to="$attrs.buttonLink"
                    class="decoration-primary decoration-2 underline-offset-8 hover:underline bg-transparent font-medium rounded-md">
                    {{ $attrs.button }}
                </NuxtLink>
            </div>
        </template>
    </UHeader>
</template>
