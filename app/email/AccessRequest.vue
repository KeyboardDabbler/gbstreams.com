<script setup lang="ts">
import { Html, Text, Hr } from '@vue-email/components'

defineProps<{
  username: string
  email: string
  existingMember: string
}>()
</script>

<template>
  <Html>
    <Text><strong>Access Request Received</strong></Text>
    <Hr />
    <Text><strong>Email:</strong> {{ email }}</Text>
    <Text><strong>Username:</strong> {{ username }}</Text>
    <Text><strong>Existing Member:</strong> {{ existingMember }}</Text>
  </Html>
</template>
