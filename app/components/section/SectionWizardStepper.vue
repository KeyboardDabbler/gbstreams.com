<script setup lang="ts">
const items = [
  {
    head: 'Thanks for Joining GBstreams!',
    instructions: 'Great news! You now have access to our server’s media collection. Let’s make sure you know how to use it on you’re device.',
    subIcon: '👉',
    subTitle: 'What’s next?',
    bulletPoints: [
      'Check out our <a href="/clients" class="text-yellow-1 underline">list of supported apps and devices</a> to see how to set up GBstreams on your preferred platform. Follow simple guides tailored for PCs, smartphones, TVs, and more.',
      'Follow simple guides tailored for PCs, smartphones, TVs, and more.'
    ],
    noteIcon: '💡',
    noteTitle: 'Tip:',
    note: 'The Jellyfin app is available on most platforms, so you’re never far from great entertainment!',
    deviceIcons: 'yes'
  },
  {
    head: 'Finding Content Made Easy',
    instructions: 'We’re excited to offer you a vast selection of media, from blockbuster movies to hidden gems. If you can’t find what you’re looking for, we’ve got you covered with our Request & Report system.',
    subIcon: '👉',
    subTitle: 'Here’s how it works:',
    bulletPoints: [
      'Request Movies or TV Shows that aren’t already available.',
      'Report issues like playback problems or missing subtitles.',
      '(Optional) Get Notifications when your requested media is ready to watch.'
    ],
    linkIcon: '👉',
    linkText: '<a href="https://request.gbstreams.com" class="text-yellow-1 underline">Access the Request Website</a>',
    noteIcon: '💡',
    noteTitle: 'Important:',
    note: 'Make sure you’re signed into GBstreams atleast once before using the Request system.',
    deviceIcons: ''
  },
  {
    head: 'What is GBstreams?',
    instructions: 'GBstreams is powered by Jellyfin, an open-source media solution that puts you in control of your entertainment. But we’ve gone the extra mile, adding new features and branding to create an enhanced streaming experience just for you.',
    subIcon: '',
    subTitle: 'Getting Started Is Simple:',
    bulletPoints: [
      'Download the Jellyfin app for your device.',
      'Sign in with your GBstreams account.',
      'Start watching!'
    ],
    linkIcon: '👉',
    linkText: '<a href="https://play.gbstreams.com" class="text-yellow-1 underline">Open the GBstreams Web Player</a>',
    noteIcon: '',
    noteTitle: '',
    note: '',
    deviceIcons: ''
  },
  {
    head: 'Personalize Your Account',
    instructions: 'Make your profile uniquely yours by updating your avatar. It’s a quick and easy way to personalize your GBstreams experience.',
    subIcon: '',
    subTitle: '',
    bulletPoints: [],
    linkIcon: '👉',
    linkText: '<a href="https://play.gbstreams.com/web/#/userprofile.html" class="text-yellow-1 underline">Go to Profile Settings</a>',
    noteIcon: '💡',
    noteTitle: 'Pro Tip:',
    note: 'A personalized profile helps differentiate users, especially if you share your account with family or friends.',
    deviceIcons: ''
  }
]

const stepper = useTemplateRef('stepper')
</script>

<template>
  <section class="p-6">
    <div class="container px-2 mx-auto">
      <div class="md:max-w-4xl mb-10 mx-auto text-center">
        <span
          class="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-1 bg-forg font-medium uppercase rounded-full shadow-sm"
        >Guide</span>
        <h1 class="mb-4 text-gray-200 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
          Setup Wizard
        </h1>
        <p class="text-lg md:text-xl font-medium">
          Follow these 4 simple steps to get started with <span class="text-yellow-1 font-bold">GBstreams</span> and
          enjoy your favorite media.
        </p>
      </div>

      <div class="w-full">
        <UStepper
          ref="stepper"
          color="secondary"
          :items="items"
        >
          <template #content="{ item }">
            <Placeholder class="aspect-video">
              <section class="p-6 sm:p-8">
                <div class="">
                  <h2 class="mb-4 text-gray-200 text-2xl md:text-3xl font-bold">
                    {{ item.head }}
                  </h2>
                  <p class="text-coolGray-500">
                    {{ item.instructions }}
                  </p>

                  <div v-if="item.subTitle || item.subInstructions">
                    <h3 class="my-4 text-gray-200 text-xl font-semibold">
                      {{ item.subIcon }} {{ item.subTitle }}
                    </h3>
                    <p
                      class="text-coolGray-500"
                      v-html="item.subInstructions"
                    />
                    <ul
                      v-if="item.bulletPoints && item.bulletPoints.length"
                      class="mt-4 space-y-2 text-left"
                    >
                      <li
                        v-for="bullet in item.bulletPoints"
                        :key="bullet"
                        class="flex items-start space-x-3 ml-4"
                      >
                        <Icon
                          class="mr-1 text-green-400"
                          name="mdi:arrow-right"
                        />
                        <span v-html="bullet" />
                      </li>
                    </ul>
                  </div>

                  <div
                    v-if="item.linkText"
                    class="flex justify-center"
                  >
                    <h4 class="mt-10 text-gray-200 text-xl font-semibold">
                      {{ item.linkIcon }}
                      <span
                        class="text-base font-normal text-gray-400"
                        v-html="item.linkText"
                      />
                    </h4>
                  </div>

                  <div
                    v-if="item.deviceIcons"
                    class="flex justify-center pt-10 space-x-10"
                  >
                    <UIcon
                      name="i-custom-tvosicon"
                      class="size-15"
                    />
                    <UIcon
                      name="i-custom-amazonfiretvicon"
                      class="size-15"
                    />
                    <UIcon
                      name="mdi:android"
                      class="size-15"
                    />
                    <UIcon
                      name="mdi:apple-ios"
                      class="size-15"
                    />
                  </div>

                  <div v-if="item.noteTitle">
                    <h4 class="my-10 text-gray-200 text-xl font-semibold">
                      {{ item.noteIcon }} {{ item.noteTitle }}
                      <span class="text-base font-normal text-gray-400">{{ item.note }}</span>
                    </h4>
                  </div>
                </div>
              </section>
            </Placeholder>
          </template>
        </UStepper>

        <div class="flex gap-2 justify-between mt-4">
          <UButton
            color="secondary"
            variant="subtle"
            leading-icon="i-lucide-arrow-left"
            :disabled="!stepper?.hasPrev"
            @click="stepper?.prev()"
          >
            Prev
          </UButton>

          <UButton
            color="secondary"
            variant="subtle"
            trailing-icon="i-lucide-arrow-right"
            :disabled="!stepper?.hasNext"
            @click="stepper?.next()"
          >
            Next
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
