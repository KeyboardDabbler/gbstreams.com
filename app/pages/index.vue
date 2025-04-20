<template>
  <div class="flex flex-col min-h-screen">
    <NavHeader
      :button="'Login Page'"
      :route="'/auth/login'"
    />
    <div class="flex-1 w-full flex flex-col">
      <UContainer class="p-6">
        <SectionFeaturesList />
      </UContainer>
    </div>
    <NavFooter />
  </div>
</template>
