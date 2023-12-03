<script lang="ts" setup>
import { ref } from 'vue'
const { signIn } = useAuth()

const username = ref('')
const password = ref('')
</script>

<template>
    <section class="p-6 sm:p-8">
        <FormKit type="form" :actions="false" @submit="signIn({ username, password }, { callbackUrl: '/dashboard/profile' })">
            <FormKit type="text" v-model="username" label="Username" name="username" placeholder="username"
                validation="required:trim|alphanumeric|lowercase" required autocomplete="off" />
            <FormKit type="password" v-model="password" label="Password" name="password" placeholder="••••••••"
                validation="required:trim" required autocomplete="new-password" />
            <div class="mt-8 border-t border-gray-700 pt-5">
                <div class="flex justify-between">
                    <span class="inline-flex rounded-md shadow-sm">
                        <a class="inline-flex items-center justify-center border leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-white bg-transparent border-gray-600 hover:border-gray-200 focus:border-gray-100 active:border-gray-100 px-4 py-2 text-sm button-md "
                            href="">
                            <span class="flex items-center">Forgot Password?</span>
                        </a>
                    </span>
                    <span class="inline-flex rounded-md shadow-sm">
                        <button type="submit"
                            class="inline-flex items-center justify-center border leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-white border border-indigo-500 bg-indigo-600 bg-opacity-80 hover:bg-opacity-100 hover:border-indigo-500 focus:border-indigo-700 focus:ring-indigo active:bg-opacity-100 active:border-indigo-700 px-4 py-2 text-sm button-md ">
                            <span class="flex items-center">Sign In</span>
                        </button>
                    </span>
                </div>
            </div>
        </FormKit>
    </section>
</template>