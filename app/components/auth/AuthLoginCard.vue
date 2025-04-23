<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()
const { fetch } = useAuth()

const fields = [{
  name: 'username',
  type: 'text' as const,
  label: 'Username',
  placeholder: 'Enter your username',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password' as const,
  placeholder: 'Enter your password',
  required: true
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox' as const
}]

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  const { username, password } = payload.data

  console.log('Login attempt with:', { username, password })

  const { data, error } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: {
      Username: username,
      Pw: password
    }
  })

  if (error.value || !data.value?.success) {
    toast.add({ title: 'Login failed', description: data.value?.error || 'Invalid credentials', color: 'red' })
    return
  } else {
    toast.add({ title: 'Login successful', description: 'Welcome back!', color: 'green' })
    await fetch()
    return await navigateTo('/dashboard')
  }
}
</script>

<template>
  <UAuthForm
    :fields="fields"
    :schema="schema"
    title="Welcome back!"
    icon="i-heroicons-lock-closed"
    :submit="{
      label: 'Submit',
      color: 'primary',
      variant: 'solid'
    }"
    @submit="onSubmit"
  >
    <template #description>
      Login with your account.
    </template>

    <template #password-hint>
      <ULink
        to="/"
        class="text-(--ui-secondary) font-medium"
        tabindex="-1"
      >Forgot password?</ULink>
    </template>

    <template #footer>
      By signing in, you agree to our <ULink
        to="/"
        class="text-(--ui-secondary) font-medium"
      >Terms of Service</ULink>.
    </template>
  </UAuthForm>
</template>
