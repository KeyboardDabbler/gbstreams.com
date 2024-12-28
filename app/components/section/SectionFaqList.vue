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
  <section class="p-6">
    <div class="container px-2 mx-auto">
      <div class="md:max-w-4xl mb-4 mx-auto text-center">
        <span
          class="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-1 bg-forg font-medium uppercase rounded-full shadow-sm"
        >FAQ</span>
        <h1 class="mb-4 text-gray-200 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
          Frequently Asked Questions
        </h1>
      </div>

      <UContainer>
        <UBanner
          color="neutral"
          icon="i-lucide-info"
          title="This documentation as well as the code may change frequently. Please check back often and do not hesitate to contact us!"
        />
        <br>
        <p>Are you tired of managing your own media server or paying for multiple streaming services to watch your favorite shows and movies? Look no further than GBstreams - the ultimate streaming solution.</p>
        <br>
        <p>At GBstreams, we provide access to an extensive library of movies, TV shows, music, books, and photos that you can stream anytime, anywhere. And the best part? You don't need to worry about managing your own server - we take care of everything for you.</p>
        <br>
        <p>Our platform is built on Jellyfin, a volunteer-built media solution that puts you in control of your media. However, we have made unique modifications to the core code to add new features and branding changes that make GBstreams stand out from the crowd.</p>
        <br>
        <p>If you've used Plex, Emby, or even Jellyfin before, you'll feel right at home with GBstreams. Our clients play all kinds of media, and we are constantly updating our library to provide you with the latest content. If you can't find what you're looking for, our request system allows you to ask us to add missing content to our library.</p>
        <br>
        <p>At GBstreams, we're committed to providing you with the best possible streaming experience. We offer a user-friendly interface that makes it easy to navigate our library and find your favorite content. Plus, we're always working to improve our platform and add new features that enhance your viewing experience.</p>
        <br>
        <p>So, what are you waiting for? Sign up for GBstreams today and unleash the power of unlimited streaming. With our platform, you'll never have to worry about managing your own server or paying for multiple streaming services again.</p>
        <br>
      </UContainer>
      <UContainer>
        <USeparator label="FAQ" />
        <UAccordion :items="items" />
      </UContainer>
    </div>
  </section>
</template>
