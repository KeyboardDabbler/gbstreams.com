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
  name: 'username',
  label: 'Username',
  type: 'text' as const,
  placeholder: 'Enter your username',
  required: true
}, {
  name: 'existingMember',
  label: 'Existing Member',
  type: 'text' as const,
  placeholder: 'Provide the name of an existing member'
}]

const schema = z.object({
  email: z.string().email('Invalid email'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  existingMember: z.string().nullable().optional()
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <UAuthForm
    :fields="fields"
    :schema="schema"
    title="Request Access"
    icon="i-heroicons-identification"
    :submit="{
      label: 'Submit',
      color: 'primary',
      variant: 'solid'
    }"
    @submit="onSubmit"
  >
    <template #description>
      Let us know a bit about you.
    </template>

    <template #footer>
      By signing in, you agree to our <ULink
        to="/"
        class="text-(--ui-secondary) font-medium"
      >Terms of Service</ULink>.
    </template>
  </UAuthForm>
</template>
