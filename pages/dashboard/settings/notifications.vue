<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const state = reactive<{ [key: string]: boolean }>({
  newContent: true,
  product_updates: false
})

const sections = [{
  title: 'Notification channels',
  description: 'What notifications would you like?',
  fields: [{
    name: 'newContent',
    label: 'New content',
    description: 'Receive a monthly email digest of new content.'
  }]
}, {
  title: 'Account updates',
  description: 'Receive updates about GBstreams.',
  fields: [{
    name: 'product_updates',
    label: 'Product updates',
    description: 'Receive a email with all new features and updates.'
  }]
}]

async function onChange() {
  // Do something with data
  console.log(state)
}
</script>

<template>
  <UDashboardPanelContent class="p-0 pb-24 divide-y divide-gray-200 dark:divide-gray-800">
    <UDashboardSection
      v-for="(section, index) in sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      orientation="horizontal"
      class="px-4 py-6"
    >
      <UCard :ui="{ body: { base: 'divide-y divide-gray-200 dark:divide-gray-800 gap-4 flex flex-col' } }">
        <UFormGroup
          v-for="field in section.fields"
          :key="field.name"
          :name="field.name"
          :label="field.label"
          :description="field.description"
          class="flex items-center justify-between pt-4 first:pt-0 gap-2"
          :ui="{ container: 'flex' }"
        >
          <UToggle
            v-model="state[field.name]"
            size="md"
            @update:model-value="onChange"
          />
        </UFormGroup>
      </UCard>
    </UDashboardSection>
  </udashboardpanelcontent>
</template>
