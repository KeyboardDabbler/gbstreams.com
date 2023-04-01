<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <DashboardHeader />
      </slot>
      <div class="flex-1 w-full flex flex-col">
        <div
          class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <TheFooter />
      </slot>
    </div>
  </div>
</template>