<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/docs')
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
, { default: () => [] })

const headline = computed(() => findPageHeadline(page.value!))
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar />
      <UDashboardPanelContent class="pb-24">

          <UPage v-if="page">
<UPageBody prose>
      <ContentRenderer
        v-if="page.body"
        :value="page"
      />

      <hr v-if="surround?.length">

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page.toc !== false"
      #right
    >
      <UContentToc :links="page.body?.toc?.links" />
    </template>
  </UPage>


      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>