<template>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div class="absolute inset-0 bg-login-pattern bg-center bg-no-repeat bg-cover">
        </div>
        <div
            class="relative bg-black bg-opacity-80 backdrop-blur-3xl blur-lg px-6 pt-10 pb-8 sm:rounded-3xl sm:mx-auto sm:max-w-lg sm:px-10">
            <div class="max-w-sm mx-auto">
                <slot />
            </div>
        </div>
    </div>
</template>
