<script>
export default {
  props: {
    imageClass: String,
  },
}
</script>

<template>
    <NuxtLink>
        <NuxtImg provider="cloudinary" src="/branding/banner-light_xgac6g.png" alt="GBstreams logo" :class="imageClass" />
    </NuxtLink>
</template>
