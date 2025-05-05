<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { useUserStore } from '@/stores/user'
import ModalAvatars from '~/components/modals/ModalAvatars.vue'

definePageMeta({
  layout: 'dashboard'
})

const userStore = useUserStore()

const hasEmail = computed(() => !!userStore.email)

const profileSchema = computed(() =>
  z.object({
    userName: z.string().min(3, 'Too short'),
    email: hasEmail.value
      ? z.string().email('Invalid email').optional()
      : z.string().email('Email required'),
    avatar: z.string().optional(),
    bio: z.string().max(80, 'Bio must be at most 80 characters').optional()
  })
)

type ProfileSchema = z.output<ReturnType<typeof profileSchema>>

const profile = reactive<Partial<ProfileSchema>>({
  email: userStore.email,
  userName: userStore.userName,
  avatar: userStore.avatar,
  bio: userStore.bio
})
const toast = useToast()

function onAvatarUpdate(newAvatar: string) {
  profile.avatar = newAvatar
}

async function onSubmit(event: FormSubmitEvent<ProfileSchema>) {
  if (!profile.email) {
    toast.add({
      title: 'Email required',
      description: 'Please provide an email address to update your profile.',
      color: 'red',
      icon: 'i-lucide-x'
    })
    profile.email = userStore.email
    return
  }

  const body: Record<string, any> = { userName: profile.userName }

  if (profile.email !== userStore.email) body.email = profile.email
  if (profile.bio !== undefined) body.bio = profile.bio
  if (profile.avatar !== undefined) body.avatar = profile.avatar

  const { data, error } = await useFetch('/api/user/profile', {
    method: 'POST',
    body
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
    :schema="profileSchema.value"
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
