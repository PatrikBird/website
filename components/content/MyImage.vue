<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{pic: string, widepic: string, alt: string}>()
</script>

<template>
  <picture>
    <source
      :srcset="widepic"
      media="(min-width: 640px)"
    >
    <img :src="pic" :alt="alt" style="margin: 0">
  </picture>
</template>
