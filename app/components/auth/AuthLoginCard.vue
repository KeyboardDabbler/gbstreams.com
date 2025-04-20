<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: 'Email',
  placeholder: 'Enter your email',
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
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const { loggedIn, user, session, clear } = useUserSession()

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
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
