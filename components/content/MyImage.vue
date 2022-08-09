<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{pic: string, widepic: string, alt: string}>()
</script>

<template>
  <div>
    <picture>
      <source
        srcset="/blog/first/test-resized-wide.webp 1500w"
        sizes="(min-width: 1300px) 80vw"
        media="(min-width: 640px)"
        :alt="alt"
      >
      <img :src="pic" :alt="alt" class="m-auto">
    </picture>
  </div>
</template>
