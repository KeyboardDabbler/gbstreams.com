<script setup lang="ts">
const items = [
  {
    slot: 'address',
    title: '',
    description: '',
    head: 'Thanks for Joining GBstreams',
    instructions: 'Great news! You now have access to our server\'s media collection. Let\'s make sure you know how to use it on you\'re device.',
    link: '/clients',
    linkText: 'Download',
    trailingicon: 'material-symbols:download'
  },
  {
    slot: 'shipping',
    title: '',
    description: '',
    head: 'The Best Way to Discover Media',
    instructions: 'We are excited to offer you a wide selection of media to choose from. If you\'re having trouble finding something you like, dont worry! We have a user-friendly Request & Repot system that can automatically search for the media you\'re looking for. You will find yourself deeper and deeper in a rabbit hole of content you never knew you just had to watch.',
    bulletPoints: [
      'Request any available Movie or TV Show',
      'Report issues with content, such as playback problems.',
      'If enabled, recieve notification once ready to watch.'
    ],
    link: 'https://request.gbstreams.com',
    linkText: 'Check it Out',
    trailingicon: 'material-symbols:open-in-new'
  },
  {
    slot: 'checkout',
    title: '',
    description: '',
    head: 'Eh, So, What is GBstreams Exactly',
    instructions: 'At GBstreams, we provide access to an extensive library. Our platform is built on Jellyfin, a volunteer-built media solution that puts you in control of your media. However, we have made unique modifications to the core code to add new features and branding changes that make GBstreams stand out from the crowd.',
    subTitle: 'Right, So How Do I Watch Stuff?',
    subInstructions: 'It couldn\'t be simpler! GBstreams is available on a wide varietyof devices including PC\'s, tablets, smartphones and TV\'s. All you need to do is download the app on your device, sign in with your account, and you\'re ready to start streaming. It\'s that easy!',
    link: 'https://play.gbstreams.com',
    linkText: 'Open GBstreams Web Player',
    trailingicon: 'material-symbols:open-in-new'
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
          Follow the 3 simple steps and you'll be able to start watching on <span class="text-yellow-1 font-bold">GBstreams</span>
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
                  <p class="text-coolGray-500 ">
                    {{ item.instructions }}
                  </p>

                  <div>
                    <h2 class="my-4 text-gray-200 text-2xl md:text-3xl font-bold">
                      {{ item.subTitle }}
                    </h2>
                    <p class="text-coolGray-500 ">
                      {{ item.subInstructions }}
                    </p>
                  </div>

                  <div class="">
                    <ul
                      class="mt-2 space-y-4 text-left text-gray-500 dark:text-gray-400"
                    >
                      <li
                        v-for="bullet in item.bulletPoints"
                        :key="bullet"
                        class="flex items-center space-x-3"
                      >
                        <Icon
                          class="mr-1 text-green-400"
                          name="mdi:check"
                        />
                        {{ bullet }}
                      </li>
                    </ul>
                  </div>

                  <div class="flex justify-center pt-5">
                    <UButton
                      class="text-base text-black font-medium text-center bg-yellow-1 rounded-md shadow-sm"
                      size="lg"
                      color="warning"
                      variant="solid"
                      :href="item.link"
                      target="_blank"
                      :trailing-icon="item.trailingicon"
                    >
                      {{ item.linkText }}
                    </UButton>
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
