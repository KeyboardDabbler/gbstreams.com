<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen">
    <slot name="header">
      <NavDashboardHeader />
    </slot>
    <div class="flex-1 flex flex-col sm:flex-row">
      <main class="flex-1 p-4">
        <div class="block md:hidden">
          <HeadlessDisclosure>
            <HeadlessDisclosureButton class="p-2 -translate-x-2">
              <Icon class="text-xl" name="mdi:menu" />
            </HeadlessDisclosureButton>
            <HeadlessDisclosurePanel class="text-gray-500">
              <DocsDropdown>
                <HeadlessDisclosureButton href="/home">
                  <Icon class="mt-4 mb-2 text-2xl text-zinc-300" name="mdi:close" />
                </HeadlessDisclosureButton>
              </DocsDropdown>
            </HeadlessDisclosurePanel>
          </HeadlessDisclosure>
        </div>
        <div class="block lg:hidden">
          <div class="w-full rounded-2xl bg-forg p-4 my-4">
            <HeadlessDisclosure v-slot="{ open }">
              <HeadlessDisclosureButton
                class="flex w-full justify-between text-left text-sm font-medium text-white">
                <span>Table of Contents</span>
                <Icon name="ic:baseline-keyboard-arrow-up" :class="open ? 'rotate-180 transform' : ''"
                  class="h-5 w-5 text-white" />
              </HeadlessDisclosureButton>
              <HeadlessDisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <TableOfContent class="" />
              </HeadlessDisclosurePanel>
            </HeadlessDisclosure>
          </div>
        </div>
        <div class="">
          <slot />
        </div>
      </main>
      <nav class="order-first pl-5 min-w-auto max-w-[220px]">
        <div class="hidden md:block sticky top-8">
          <DocsAside class="" />
        </div>
      </nav>
      <aside class="p-4 min-w-auto max-w-[300px]">
        <div class="hidden lg:block sticky top-8">
          <TableOfContent class="" />
        </div>
      </aside>
    </div>
    <slot name="footer">
      <NavFooter />
    </slot>
  </div>
</template>


