<!-- <script setup lang="ts">
const props = defineProps<{pic: string, widepic: string, alt: string}>()
</script> -->

<template>
  <!-- <img src="test-resized.webp" alt="yummy food"> -->
  <picture>
    <source
      srcset="/blog/first/test-resized-wide.webp"
      media="(min-width: 640px)"
    >
    <img src="/blog/first/test-resized.webp" alt="yummy food" style="margin-top: 0">
  </picture>
</template>
