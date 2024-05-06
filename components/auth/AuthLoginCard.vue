<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { FormError } from '#ui/types'
import { useAuthStore } from '~/store/auth'

const { authenticateUser } = useAuthStore()
const { authenticated } = storeToRefs(useAuthStore())

const router = useRouter()

const fields = [{
  name: 'username',
  type: 'text',
  label: 'Username',
  placeholder: 'Enter your username'
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
}]

const validate = (state: any) => {
  const errors: FormError[] = []
  if (!state.username) errors.push({ path: 'username', message: 'Username is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

async function onSubmit(data: any) {
  await authenticateUser(data)

  if (authenticated.value) {
    router.push('/dashboard')
  } else {
    console.error('Authentication failed')
  }
}
</script>

<template>
  <UCard class="max-w-sm w-full">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      title="Welcome back!"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      @submit="onSubmit"
    >
      <template #description>
        Login with your account.
      </template>

      <template #password-hint>
        <NuxtLink
          to="#"
          class="text-primary font-medium"
        >
          Forgot password?
        </NuxtLink>
      </template>

      <template #footer>
        By signing in, you agree to our <NuxtLink
          to="#"
          class="text-primary font-medium"
        >
          Terms of Service
        </NuxtLink>.
      </template>
    </UAuthForm>
  </UCard>
</template>
