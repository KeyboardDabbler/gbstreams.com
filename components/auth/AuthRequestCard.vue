<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  email: z.string().email('Invalid email'),
  username: z.string().min(3, 'Must be at least 3 characters'),
  textarea: z.string().min(10, 'Must be at least 10 characters'),
});

type Schema = z.infer<typeof schema>;

const state = reactive({
  email: undefined,
  username: undefined,
  textarea: undefined,
});

export interface IFormData {
    email: string
    username: string
    textarea: string
}

const successMessage = ref<string | null>(null)

async function onSubmit(data: IFormData, event: FormSubmitEvent<Schema>) {
  successMessage.value = null
  try {
    const { data: emailRes, error } = await useFetch('/api/user/send-email', {
      method: 'POST',
      body: data
    })
    if (emailRes.value === 200) {
      successMessage.value = 'Email has been sent.'
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <UCard class="max-w-sm w-full">
    <div class="text-center mb-6">
      <UIcon name="i-heroicons-envelope" class="mb-2 dark:text-white w-8 h-8" />
      <p class="text-2xl dark:text-white font-bold">Request access!</p>
      <p class="dark:text-gray-400 mt-1"> How did hear about <span class="text-primary">GBstreams</span>? </p>
    </div>
    <UForm :schema="schema" :state="state" class="gap-y-6 space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="Enter your email" />
      </UFormGroup>
      <UFormGroup label="Do you know an existing user?" name="username">
        <UInput v-model="state.username" placeholder="User" />
      </UFormGroup>
      <UFormGroup label="Text Area" name="textarea">
        <UTextarea v-model="state.textarea" placeholder="Add any further description to help our decision?" />
      </UFormGroup>
      <UButton label="Submit" type="submit" block />
      <span class="flex text-sm dark:text-gray-400 mt-2 text-center">We will never share your email with anyone
        else.</span>
    </UForm>
  </UCard>
</template>
