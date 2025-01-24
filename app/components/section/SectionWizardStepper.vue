<script setup lang="ts">
const items = [
  {
    head: 'Thanks for Joining GBstreams!',
    instructions: 'Great news! You now have access to our server’s media collection. Let’s make sure you know how to use it on you’re device.',
    subIcon: '👉',
    subTitle: 'What’s next?',
    bulletPoints: [
      {
        text: 'Check out our ',
        link: { href: '/clients', text: 'list of supported apps and devices', class: 'text-yellow-1 underline' },
        afterLink: ' to see how to set up GBstreams on your preferred platform. Follow simple guides tailored for PCs, smartphones, TVs, and more.'
      },
      {
        text: 'Follow simple guides tailored for PCs, smartphones, TVs, and more.'
      }
    ],
    noteIcon: '💡',
    noteTitle: 'Tip:',
    note: 'The Jellyfin app is available on most platforms, so you’re never far from great entertainment!',
    deviceIcons: 'yes',
    gif: '',
    gifAlt: ''
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
    linkText: {
      href: 'https://request.gbstreams.com',
      text: 'Access the Request Website'
    },
    noteIcon: '💡',
    noteTitle: 'Important:',
    note: 'Make sure you’re signed into GBstreams atleast once before using the Request system.',
    deviceIcons: '',
    gif: '/img/request_np0jga.gif',
    gifAlt: 'Reporting media'
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
    linkText: {
      href: 'https://play.gbstreams.com',
      text: 'Open the GBstreams Web Player'
    },
    noteIcon: '',
    noteTitle: '',
    note: '',
    deviceIcons: '',
    gif: '',
    gifAlt: ''
  },
  {
    head: 'Personalize Your Account',
    instructions: 'Make your profile uniquely yours by updating your avatar. It’s a quick and easy way to personalize your GBstreams experience.',
    subIcon: '',
    subTitle: '',
    bulletPoints: [],
    linkIcon: '👉',
    linkText: {
      href: 'https://play.gbstreams.com/web/#/userprofile.html',
      text: 'Go to Profile Settings'
    },
    noteIcon: '💡',
    noteTitle: 'Pro Tip:',
    note: 'A personalized profile helps differentiate users, especially if you share your account with family or friends.',
    deviceIcons: '',
    gif: '/img/avatar_x2ufzo.gif',
    gifAlt: 'Setting profile avatar gif'
  },
  {
    head: 'Share the Experience',
    instructions: 'GBstreams is an invite-only service, designed to keep our resources available for our valued members. From time to time, we open up new memberships to allow our community to grow.',
    subIcon: '',
    subTitle: 'How It Works:',
    bulletPoints: [
      {
        text: 'Check your ',
        link: { href: 'https://invite.gbstreams.com', text: 'User Invite Page', class: 'text-yellow-1 underline' },
        afterLink: ' to see if you have any referral links available.'
      },
      {
        text: 'Share these links with friends or family members.'
      },
      {
        text: 'Each referral link allows someone to create their own account and join the GBstreams platform.'
      }
    ],
    linkIcon: '👉',
    linkText: {},
    noteIcon: '💡',
    noteTitle: 'Pro Tip:',
    note: 'Referral links are limited, so choose wisely and share them with those who will appreciate our content as much as you do!',
    deviceIcons: '',
    gif: '/img/refferal_e9cd6m.gif',
    gifAlt: 'Creating refferal link gif'
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
          :linear="false"
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
                    <ul
                      v-if="item.bulletPoints && item.bulletPoints.length"
                      class="mt-4 space-y-2 text-left"
                    >
                      <li
                        v-for="(bullet, index) in item.bulletPoints"
                        :key="index"
                        class="flex items-start space-x-3 ml-4"
                      >
                        <Icon
                          class="mr-1 text-green-400"
                          name="mdi:arrow-right"
                        />
                        <span>
                          <span v-if="typeof bullet === 'string'">{{ bullet }}</span>
                          <span v-else>
                            <span v-if="bullet.text">{{ bullet.text }}</span>
                            <a
                              v-if="bullet.link"
                              :href="bullet.link.href"
                              :class="bullet.link.class"
                            >{{ bullet.link.text }}</a>
                            <span v-if="bullet.afterLink">{{ bullet.afterLink }}</span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div
                    v-if="item.linkText"
                    class="flex justify-center"
                  >
                    <h5 class="mt-10 text-gray-200 text-lg font-semibold">
                      {{ item.linkIcon }}
                      <a
                        :href="item.linkText.href"
                        class="text-yellow-1 underline"
                      >{{ item.linkText.text }}</a>
                    </h5>
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

                  <div
                    v-if="item.gif"
                    class="flex justify-center pt-10 space-x-10"
                  >
                    <NuxtImg
                      provider="cloudinary"
                      format="gif"
                      :src="item.gif"
                      :alt="item.gifAlt"
                      class="h-100"
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
