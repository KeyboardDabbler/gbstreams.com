<template>
  <div class="flex flex-col min-h-screen">
    <slot name="header">
      <NavDashboardHeader />
    </slot>
    <div class="flex-1 w-full flex flex-col">
      <div class="relative flex-1 flex flex-col mx-auto w-full h-full">
        <slot />
      </div>
    </div>
    <slot name="footer">
      <NavFooter />
    </slot>
  </div>
</template>