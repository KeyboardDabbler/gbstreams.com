<script setup lang="ts">
const { isHelpSlideoverOpen } = useDashboard()
const { isDashboardSearchModalOpen } = useUIState()

const items = computed(() => [
  [{
    slot: 'account',
    label: '',
    disabled: true
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => {
      logUserOut()
      router.push('/login')
    }
  }]
])
</script>

<template>
  <UDropdown
    mode="hover"
    :items="items"
    :ui="{ width: 'w-full', item: { disabled: 'cursor-text select-text' } }"
    :popper="{ strategy: 'absolute', placement: 'top' }"
    class="w-full"
  >
    <template #default="{ open }">
      <UButton
        color="gray"
        variant="ghost"
        class="w-full"
        label="GBstreams"
        :class="[open && 'bg-gray-50 dark:bg-gray-800']"
      >
        <template #leading>
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            size="2xs"
          />
        </template>

        <template #trailing>
          <UIcon
            name="i-heroicons-ellipsis-vertical"
            class="w-5 h-5 ml-auto"
          />
        </template>
      </UButton>
    </template>

    <template #account>
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          GBstreams@gmail.com
        </p>
      </div>
    </template>
  </UDropdown>
</template>
