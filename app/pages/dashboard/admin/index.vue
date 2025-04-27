<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { useUserStore } from '@/stores/user'
import ModalAvatars from '~/components/modals/ModalAvatars.vue'

definePageMeta({
  layout: 'dashboard'
})

const userStore = useUserStore()

const profileSchema = z.object({
  userName: z.string().min(3, 'Too short'),
  email: z.string().email('Invalid email'),
  avatar: z.string().optional(),
  bio: z.string().optional()
})

type ProfileSchema = z.output<typeof profileSchema>

const profile = reactive<Partial<ProfileSchema>>({
  email: userStore.email,
  userName: userStore.userName,
  avatar: userStore.avatar,
  bio: userStore.bio
})
const toast = useToast()

function onAvatarUpdate(newAvatar: string) {
  profile.avatar = newAvatar
  userStore.avatar = newAvatar
}

async function onSubmit(event: FormSubmitEvent<ProfileSchema>) {
  const { data, error } = await useFetch('/api/user/profile', {
    method: 'POST',
    body: {
      email: profile.email,
      bio: profile.bio
    }
  })
  if (error.value) {
    if (error.value.statusCode === 409) {
      toast.add({
        title: 'Email already in use',
        description: 'Please use a different email address.',
        color: 'red',
        icon: 'i-lucide-x'
      })
    } else {
      toast.add({ title: 'Profile update failed', color: 'red' })
    }
    return
  }
  userStore.setUser(data.value)
  toast.add({
    title: 'Success',
    description: 'Your settings have been updated.',
    icon: 'i-lucide-check',
    color: 'success'
  })
}
</script>

<template>
  <UForm
    id="settings"
    :schema="profileSchema"
    :state="profile"
    @submit="onSubmit"
  >
    <UPageCard
      title="Profile"
      description="These informations will be displayed publicly."
      variant="naked"
      orientation="horizontal"
      class="mb-4"
    >
      <UButton
        form="settings"
        label="Save changes"
        color="neutral"
        type="submit"
        class="w-fit lg:ms-auto"
      />
    </UPageCard>

    <UPageCard variant="subtle">
      <UFormField
        name="userName"
        label="Username"
        description="Your unique username. Cannot be changed later."
        class="flex max-sm:flex-col justify-between items-start gap-4"
      >
        <UInput
          v-model="profile.userName"
          type="username"
          autocomplete="off"
          disabled
        />
      </UFormField>
      <USeparator />
      <UFormField
        name="email"
        label="Email"
        description="Used to sign in, for email receipts and product updates."
        required
        class="flex max-sm:flex-col justify-between items-start gap-4"
      >
        <UInput
          v-model="profile.email"
          type="email"
          autocomplete="off"
        />
      </UFormField>
      <USeparator />
      <UFormField
        name="avatar"
        label="Avatar"
        description="Select your avatar from the list."
        class="flex max-sm:flex-col justify-between sm:items-center gap-4"
      >
        <div class="flex flex-wrap items-center gap-3">
          <UAvatar
            :src="profile.avatar"
            :alt="profile.userName"
            size="lg"
          />
          <ModalAvatars @update="onAvatarUpdate" />
        </div>
      </UFormField>
      <USeparator />
      <UFormField
        name="bio"
        label="Bio"
        description="Brief description for your profile."
        class="flex max-sm:flex-col justify-between items-start gap-4"
        :ui="{ container: 'w-full' }"
      >
        <UTextarea
          v-model="profile.bio"
          :rows="5"
          autoresize
          class="w-full"
        />
      </UFormField>
    </UPageCard>
  </UForm>
</template>
