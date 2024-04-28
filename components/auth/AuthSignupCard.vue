<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = computed(() => {
  if (!isValid.value) {
    return z.object({
      code: z.string().min(1, { message: 'Code cannot be blank' }).refine(code => isNaN(parseInt(code[0])), {
        message: 'Invalid code'
      })
    })
  } else {
    return z.object({
      email: z.string().email('Invalid email'),
      username: z.string().min(3, 'Must be at least 3 characters'),
      password: z.string().refine((password) => {
        if (password.length < 8) return false
        if (!/\d/.test(password)) return false
        if (!/[A-Z]/.test(password)) return false
        return true
      }, 'Must have at least 8 characters, 1 number, and 1 uppercase character'),
      repassword: z.string().refine(repassword => repassword === state.password, 'Passwords do not match')
    })
  }
})

type Schema = z.infer<typeof schema>

const state = reactive({
  code: '',
  email: '',
  username: '',
  password: '',
  repassword: ''
})

const isValid = ref(false)

async function verifyCode(event: FormSubmitEvent<Schema>) {
  try {
    await schema.value.parseAsync(event.data)
    const { data, error } = await useFetch('/api/invite/verifyCode', {
      method: 'POST',
      body: event.data
    })

    if (data.value === 200) {
      isValid.value = true
    } else {
      console.error('Invalid invite code')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await schema.value.parseAsync(event.data)
    const { data, error } = await useFetch('/api/invite/newUser', {
      method: 'POST',
      body: event.data
    })
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>

<template>
  <UCard class="max-w-sm w-full">
    <div class="text-center mb-6">
      <UIcon
        name="i-heroicons-identification"
        class="mb-2 dark:text-white w-8 h-8"
      />
      <p class="text-2xl dark:text-white font-bold">
        Lets signup!
      </p>
      <p class="dark:text-gray-400 mt-1">
        Follow the steps below.
      </p>
    </div>
    <UForm
      v-if="!isValid"
      :schema="schema"
      :state="state"
      class="gap-y-6 space-y-4"
      @submit="verifyCode"
    >
      <UFormGroup
        label="Invite Code"
        name="code"
      >
        <UInput
          v-model="state.code"
          placeholder="Enter your invite code"
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

    <UForm
      v-else
      :schema="schema"
      :state="state"
      class="gap-y-6 space-y-4"
      @submit="onSubmit"
    >
      <UFormGroup
        label="Invite code"
        name="code"
      >
        <UInput
          v-model="state.code"
          :placeholder="state.code"
        />
      </UFormGroup>
      <UFormGroup
        label="Username"
        name="username"
      >
        <UInput
          v-model="state.username"
          placeholder="Username"
        />
      </UFormGroup>
      <UFormGroup
        label="Email"
        name="email"
      >
        <UInput
          v-model="state.email"
          placeholder="Enter your email"
        />
      </UFormGroup>
      <UFormGroup
        label="Password"
        name="password"
      >
        <UInput
          v-model="state.password"
          placeholder="Password"
        />
      </UFormGroup>
      <UFormGroup
        label="Re-enter password"
        name="repassword"
      >
        <UInput
          v-model="state.repassword"
          placeholder="Password"
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
