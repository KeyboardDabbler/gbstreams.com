<script setup lang="ts">
const toast = useToast()
const loading = ref(false)

async function logout() {
  loading.value = true
  const { data, error } = await useFetch('/api/auth/logout', { method: 'POST' })
  loading.value = false

  if (error.value || !data.value?.success) {
    toast.add({ title: 'Logout failed', color: 'red' })
    return
  }
  toast.add({ title: 'Logged out', color: 'green' })
  await navigateTo('/auth/login')
}

defineExpose({ logout })
</script>
