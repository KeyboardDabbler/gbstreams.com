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

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'button pressed.', color: 'primary' })

  console.log('Form submitted with payload:', payload.data)
  try {
    const response = await useFetch('/api/email/request-access', {
      method: 'POST',
      body: payload.data
    })
    if (response.success) {
      toast.add({ title: 'Success', description: 'Your request has been sent successfully!', color: 'primary' })
    } else {
      toast.add({ title: 'Success', description: 'Failed to send your request. Please try again.', color: 'primary' })
    }
  } catch (error) {
    console.error(error)
    toast.add({ title: 'Success', description: 'An error occurred while sending your request.', color: 'primary' })
  }
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
