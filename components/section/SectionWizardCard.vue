<script setup lang="ts">
const currentStep = ref(0)

const nextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <ULandingCard v-if="currentStep === 0">
    <div class="py-24 sm:py-32">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center flex flex-col items-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Thanks for
            Joining GBstreams
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            Great news! You now have access to our server's
            media collection. Let's make sure you know how to use it on you're device.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center items-center">
      <UButton
        icon="material-symbols:download"
        size="md"
        color="black"
        variant="ghost"
        label="Download"
        trailing
      />
    </div>
    <div class="w-full flex justify-end items-center">
      <UButton
        icon="material-symbols-light:east"
        size="md"
        color="gray"
        label="Next"
        trailing
        @click="nextStep"
      />
    </div>
  </ULandingCard>

  <ULandingCard v-if="currentStep === 1">
    <div class="py-24 sm:py-32">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center flex flex-col items-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            The Best
            Way to Discover Media
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            We are excited to offer you a wide selection of
            media to choose from. If you're having trouble finding something you like, dont worry! We have a
            user-friendly Request & Repot system that can automatically search for the media you're looking for. You
            will find yourself deeper and deeper in a rabbit hole of content you never knew you just had to watch.
          </p>
          <dl class="mt-6 leading-7 space-y-4">
            <div class="relative pl-8">
              <dt class="text-gray-900 dark:text-white font-medium">
                <UIcon
                  class="mr-2"
                  size="24"
                  color="green"
                  name="material-symbols:check"
                  dynamic
                />
                <span>Request any available Movie or TV Show</span>
              </dt>
            </div>
            <div class="relative pl-8">
              <dt class="text-gray-900 dark:text-white font-medium">
                <UIcon
                  class="mr-2"
                  size="24"
                  color="green"
                  name="material-symbols:check"
                  dynamic
                />
                <span>Report issues with content, such as playback problems.</span>
              </dt>
            </div>
            <div class="relative pl-8">
              <dt class="text-gray-900 dark:text-white font-medium">
                <UIcon
                  class="mr-2"
                  size="24"
                  color="green"
                  name="material-symbols:check"
                  dynamic
                />
                <span>If enabled, recieve notification once ready to watch.</span>
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center items-center">
      <UButton
        icon="material-symbols:open-in-new"
        size="md"
        color="black"
        variant="ghost"
        label="Check it out"
        trailing
      />
    </div>
    <div class="w-full flex justify-between items-center">
      <UButton
        icon="material-symbols-light:west"
        size="md"
        color="gray"
        label="Previous"
        trailing
        @click="prevStep"
      />
      <UButton
        icon="material-symbols-light:east"
        size="md"
        color="gray"
        label="Next"
        trailing
        @click="nextStep"
      />
    </div>
  </ULandingCard>

  <ULandingCard v-if="currentStep === 2">
    <div class="py-24 sm:py-32">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center flex flex-col items-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Eh, So,
            What is GBstreams Exactly
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            At GBstreams, we provide access to an extensive
            library. Our platform is built on Jellyfin, a volunteer-built media solution that puts you in control of
            your media. However, we have made unique modifications to the core code to add new features and branding
            changes that make GBstreams stand out from the crowd.
          </p>
          <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Right, So How Do I Watch Stuff?
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            It couldn't be simpler! GBstreams is available on a
            wide varietyof devices including PC's, tablets, smartphones and TV's. All you need to do is download the app
            on your device, sign in with your account, and you're ready to start streaming. It's that easy!
          </p>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center items-center">
      <UButton
        icon="material-symbols:open-in-new"
        size="md"
        color="black"
        variant="ghost"
        label="Open GBstreams Web Player"
        trailing
      />
    </div>
    <div class="w-full flex justify-start items-center">
      <UButton
        icon="material-symbols-light:west"
        size="md"
        color="gray"
        label="Previous"
        trailing
        @click="prevStep"
      />
    </div>
  </ULandingCard>
</template>
