<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { storeToRefs } from 'pinia'

const store = useAuthStore()
const { userDetails, referralDetails } = storeToRefs(store)

const isInviteModalOpen = ref(false)

const formattedExpiry = computed(() => {
  const expiryTimestamp = referralDetails.value.expiry * 1000; // Convert seconds to milliseconds
  const expiryDate = new Date(expiryTimestamp);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  };
  return expiryDate.toLocaleString("en-US", options);
})

const copyToClipboard = () => {
  const inputElement = document.querySelector('input') as HTMLInputElement;
  if (inputElement) {
    inputElement.select();
    document.execCommand('copy');
  }
}

</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <div v-if="referralDetails && referralDetails.remaining_uses !== null && referralDetails.remaining_uses > 0">
    <UDashboardSection
      title="Refferals"
      description="Invite friends and family to join GBstreams. Invitations are limited, so be sure to check back here for updates."
    >
      <UPageGrid :ui="{ wrapper: 'xl:grid-cols-2' }">
        <UPageCard>
          <div class="flex flex-col justify-center items-center">
            <p class="text-2xl font-bold dark:text-gray-200 flex items-center">
              {{ referralDetails.remaining_uses }}
            </p>
            <p class="font-medium dark:text-gray-200 flex items-center mt-2">
              Remaining Invitations
            </p>
            <p class=" dark:text-gray-400 text-sm mt-1">
              Number of invitations.
            </p>
          </div>
        </UPageCard>
        <UPageCard>
          <div class="flex flex-col justify-center items-center">
            <p class="text-2xl font-bold dark:text-gray-200 flex items-center">
              {{ formattedExpiry }}
            </p>
            <p class="font-medium dark:text-gray-200 flex items-center mt-2">
              Expiry Date
            </p>
            <p class="dark:text-gray-400 text-sm mt-1">
              Invitation expiry date.
            </p>
          </div>
        </UPageCard>
      </UPageGrid>

      <UFormGroup
        label="Send Email Invitation"
        description="Easily send invitations via email to friends or family!"
        class="grid grid-cols-2 gap-2"
        :ui="{ container: '' }"
      >
        <UButton
          block
          label="Send email"
          color="black"
          @click="isInviteModalOpen = true"
        />
      </UFormGroup>

      <UFormGroup
        label="Share Your Unique Code"
        description="Copy your unique code and share it with friends or family!"
        class="grid grid-cols-2 gap-2"
        :ui="{ container: '' }"
      >
        <UButtonGroup
          size="md"
          class="mt-2"
          orientation="horizontal"
          :ui="{ wrapper: { horizontal: 'flex -space-x-px' } }"
        >
          <UInput 
            v-model="referralDetails.code"
            disabled
            :ui="{ wrapper: 'w-full' }"
          />
          <UButton
            icon="i-heroicons-clipboard-document"
            color="gray"
            @click="copyToClipboard"
          />
        </UButtonGroup>
      </UFormGroup>
    </UDashboardSection>

    <UDashboardModal
      v-model="isInviteModalOpen"
      title="Invite people"
      description="Invite new members to GBstreams by email address. Simply enter their email and we'll send them an invitation on your behalf."
      :ui="{ width: 'sm:max-w-md' }"
    >
      <SettingsRefferalForm @close="isInviteModalOpen = false" />
    </UDashboardModal>

    </div>

    <div v-else>
      <UPageHero 
    align="center"
    title="Referrals"
    description="You've used all your invitations for now. Check back soon for more opportunities to invite friends and family to join GBstreams!"
  />
    </div>

  </UDashboardPanelContent>
</template>
