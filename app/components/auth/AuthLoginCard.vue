<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { v4 as uuidv4 } from 'uuid'
import { useDevice } from '#imports'

const toast = useToast()
const { fetch } = useAuth()
const device = useDevice()

function getDeviceName() {
  const parts = []
  if (device.isDesktop) parts.push('Desktop')
  if (device.isTablet) parts.push('Tablet')
  if (device.isMobile) parts.push('Mobile')
  if (device.isMobileOrTablet) parts.push('MobileOrTablet')
  if (device.isDesktopOrTablet) parts.push('DesktopOrTablet')
  if (device.isIos) parts.push('iOS')
  if (device.isLinux) parts.push('Linux')
  if (device.isWindows) parts.push('Windows')
  if (device.isMacOS) parts.push('MacOS')
  if (device.isApple) parts.push('Apple')
  if (device.isAndroid) parts.push('Android')
  if (device.isFirefox) parts.push('Firefox')
  if (device.isEdge) parts.push('Edge')
  if (device.isChrome) parts.push('Chrome')
  if (device.isSafari) parts.push('Safari')
  if (device.isSamsung) parts.push('Samsung')
  if (device.isCrawler) parts.push('Crawler')

  if (parts.length === 0 && device.userAgent) {
    parts.push(device.userAgent)
  }
  return parts.join(' ')
}

function getDeviceId() {
  const storageKey = 'deviceId'
  let id = ''
  if (import.meta.client) {
    id = localStorage.getItem(storageKey) || ''
    if (!id) {
      id = uuidv4()
      localStorage.setItem(storageKey, id)
    }
  }
  return id
}

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
  password: z.string().min(8, 'Must be at least 8 characters'),
  remember: z.boolean().optional()
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  const { username, password, remember } = payload.data
  const deviceName = getDeviceName()
  const deviceId = getDeviceId()

  const { data, error } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: {
      Username: username,
      Pw: password,
      Remember: remember,
      deviceName,
      deviceId
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
    loading-auto
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
