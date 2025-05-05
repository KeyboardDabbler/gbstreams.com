<script setup lang="ts">
import * as z from 'zod'
import type { FormError, FormSubmitEvent } from '@nuxt/ui'
import { useLogout } from '@/composables/useLogout'

definePageMeta({
  layout: 'dashboard'
})

const passwordSchema = z.object({
  current: z.string().min(8, 'Must be at least 8 characters'),
  new: z.string().min(8, 'Must be at least 8 characters'),
  confirm: z.string().min(8, 'Must be at least 8 characters')
}).refine(data => data.new === data.confirm, {
  message: 'Passwords do not match',
  path: ['confirm']
})

type PasswordSchema = z.output<typeof passwordSchema>

const password = reactive<Partial<PasswordSchema>>({
  current: undefined,
  new: undefined,
  confirm: undefined
})

const validate = (state: Partial<PasswordSchema>): FormError[] => {
  const errors: FormError[] = []
  if (state.current && state.new && state.current === state.new) {
    errors.push({ name: 'new', message: 'New password must be different from current password' })
  }
  return errors
}

const toast = useToast()
const logoutAndRedirect = useLogout()

async function onSubmit(event: FormSubmitEvent<PasswordSchema>) {
  const { current, new: newPassword, confirm } = event.data
  console.log('Submitting password update:', { current, newPassword, confirm })
  const { data, error } = await useFetch('/api/user/password', {
    method: 'POST',
    body: {
      current,
      new: newPassword
    }
  })
  console.log('Password update response:', { data: data.value, error: error.value })
  if (error.value || !data.value?.success) {
    toast.add({ title: 'Password update failed', color: 'red' })
    password.current = password.new = password.confirm = ''
  } else {
    toast.add({ title: 'Password updated. Please sign in again.', color: 'green' })
    password.current = password.new = password.confirm = ''
    await logoutAndRedirect()
  }
}
</script>

<template>
  <UPageCard
    title="Password"
    description="Confirm your current password before setting a new one."
    variant="subtle"
  >
    <UForm
      :schema="passwordSchema"
      :state="password"
      :validate="validate"
      class="flex flex-col gap-4 max-w-xs"
      @submit="onSubmit"
    >
      <UFormField name="current">
        <UInput
          v-model="password.current"
          type="password"
          placeholder="Current password"
          class="w-full"
        />
      </UFormField>

      <UFormField name="new">
        <UInput
          v-model="password.new"
          type="password"
          placeholder="New password"
          class="w-full"
        />
      </UFormField>

      <UFormField name="confirm">
        <UInput
          v-model="password.confirm"
          type="password"
          placeholder="Confirm new password"
          class="w-full"
        />
      </UFormField>

      <UButton
        label="Update"
        class="w-fit"
        type="submit"
      />
    </UForm>
  </UPageCard>

  <UPageCard
    title="Account"
    description="No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently."
    class="bg-gradient-to-tl from-(--ui-error)/10 from-5% to-(--ui-bg)"
  >
    <template #footer>
      <UButton
        disabled
        label="Delete account"
        color="error"
      />
    </template>
  </UPageCard>
</template>
