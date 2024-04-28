<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = computed(() => {
  if (state.toggle) {
    return z.object({
      email: z.string().email('Invalid email'),
      username: z.string().min(3, 'Must be at least 3 characters'),
      textarea: z.string().min(10, 'Must be at least 10 characters')
    })
  } else {
    return z.object({
      email: z.string().email('Invalid email'),
      textarea: z.string().min(10, 'Must be at least 10 characters')
    })
  }
})

type Schema = z.infer<typeof schema>

const state = reactive({
  email: '',
  username: '',
  textarea: '',
  toggle: false
})

const successMessage = ref<string | null>(null)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  successMessage.value = null
  try {
    await schema.value.parseAsync(event.data)
    // Validation passed, continue with form submission logic
    console.log('Form data:', event.data)

    // Call the endpoint to send the email
    const { data: emailRes, error } = await useFetch('/api/user/send-email', {
      method: 'POST',
      body: event.data // Assuming 'data' contains the form data
    })

    // Handle response from email sending endpoint
    if (!emailRes) {
      // If email sending failed, display error message
      node?.setErrors([error?.statusMessage!])
    } else if (emailRes === 200) {
      // If email sending was successful, set success message
      successMessage.value = 'Email has been sent.'
    }
  } catch (error) {
    // Catch any unexpected errors
    console.error('Error:', error)
  }
}
</script>

<template>
  <UCard class="max-w-sm w-full">
    <div class="text-center mb-6">
      <UIcon
        name="i-heroicons-envelope"
        class="mb-2 dark:text-white w-8 h-8"
      />
      <p class="text-2xl dark:text-white font-bold">
        Request access!
      </p>
      <p class="dark:text-gray-400 mt-1">
        How did hear about <span class="text-primary">GBstreams</span>?
      </p>
    </div>
    <UForm
      :schema="schema"
      :state="state"
      class="gap-y-6 space-y-4"
      @submit="onSubmit"
    >
      <UFormGroup
        label="Email"
        name="email"
        required
      >
        <UInput
          v-model="state.email"
          placeholder="Enter your email"
        />
      </UFormGroup>
      <UFormGroup
        label="Do you know an existing user?"
        name="toggle"
      >
        <UToggle v-model="state.toggle" />
      </UFormGroup>
      <UFormGroup
        v-if="state.toggle"
        label="Name of the user"
        name="username"
        required
      >
        <UInput
          v-model="state.username"
          placeholder="User"
        />
      </UFormGroup>
      <UFormGroup
        label="Text Area"
        name="textarea"
        required
      >
        <UTextarea
          v-model="state.textarea"
          placeholder="Add any further description to help our decision?"
        />
      </UFormGroup>
      <UButton
        label="Submit"
        type="submit"
        block
      />
      <span class="flex text-sm dark:text-gray-400 mt-2 text-center">We will never share your email with anyone
        else.</span>
    </UForm>
  </UCard>
</template>
