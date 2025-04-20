<script setup lang="ts">
const items = ref([
  {
    label: 'What client device do you recommend I use?',
    content: 'Personally use the nvidia shield pro. It can direct play everything thrown at it and manages HDR great. Iv\'e also heard good things about tvOS.'
  },
  {
    label: 'How can I watch media on GBstreams?',
    content: 'GBstreams provides official browser based clients and we are working on additional app\'s on your favoroite devices. In the meantime you can try some excellent third-party apps that provides a native user interface to browse the GBstreams library. For Android, there is a fine 3rd party app called Findroid that I have personally tested to be working great. For IOS, Swiftin Here is the list of currently available clients:'
  },
  {
    label: 'I have a friend who wants to join GBstreams. What do I do?',
    content: ''
  },
  {
    label: 'What is JellyFin?',
    content: ''
  },
  {
    label: 'If I\'m having a question or problem with something, what should I do?',
    content: ''
  },
  {
    label: 'How do I become a member to gain access?',
    content: ''
  },
  {
    label: 'How can I support ?',
    content: ''
  },
  {
    label: 'Should I be direct playing? Is transcoding okay (i.e. play content at different quality levels to save data usage?)?',
    content: ''
  },
  {
    label: 'How to Direct Play?',
    content: ''
  }
])
</script>

<template>
  <section>
    <div>
      <div class="md:max-w-4xl mb-4 mx-auto text-center">
        <h1 class="mb-4 text-gray-200 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
          Frequently Asked Questions
        </h1>
      </div>
      <UContainer class="mt-10">
        <USeparator label="FAQ" />
        <UAccordion :items="items" />
      </UContainer>
    </div>
  </section>
</template>
