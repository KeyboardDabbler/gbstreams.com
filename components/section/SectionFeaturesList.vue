<script setup>
const modules = [{
  title: 'Streaming library',
  description: 'Watch full seasons of exclusive series, classic favorites, Network Originals, hit movies, current episodes, kids shows, and tons more..',
  icon: 'FeatStreaming'
}, {
  title: 'Watch anywhere',
  description: 'Enjoy from the web or with the GBstreams app on your phone, tablet, or select Smart TVs — on up to 2 devices at once.',
  icon: 'FeatWatch'
}, {
  title: 'IPTV',
  description: 'Catch your games at home or on the go. Stream live games from major leagues from around the world.',
  icon: 'FeatIptv'
}, {
  title: 'Automated services',
  description: 'Request & reporting interface that is incredibly easy to understand and use. Several notification agents are directly supported',
  icon: 'FeatAuto'
}, {
  title: 'CDN',
  description: 'We store high demand content on high avaliable 10Gbps storage to bring GBstreams faster load, seek, skip and play times.',
  icon: 'FeatCdn'
}, {
  title: 'Fast support',
  description: 'Access to live messaging, FAQ and helpful guides!!',
  icon: 'FeatFaq'
}]
</script>

<template>
  <div class="md:max-w-4xl mb-10 mx-auto text-center">
    <UBadge label="Features" variant="soft" :ui="{ rounded: 'rounded-full', font: 'uppercase' }" />
    <h1 class="my-3 text-gray-200 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">What We Do</h1>
    <p class="text-lg md:text-xl font-medium">Enjoy your favorite shows your
      way, There's always something great on <span class="text-primary font-bold">GBstreams</span></p>
  </div>
  <UPageGrid>
    <UPageCard v-for="(module) in modules" :ui="{ ring: '' }">
      <template #description>
        <div class="p-8 text-center">
          <div class="items-center justify-center">
            <UIcon :name="module.icon" class="h-32 w-32" />
          </div>
          <h3 class="mb-4 text-gray-200 text-xl md:text-2xl leading-tight font-bold">{{ module.title }}</h3>
          <p class="font-medium">{{ module.description }}</p>
        </div>
      </template>
    </UPageCard>
  </UPageGrid>
</template>
