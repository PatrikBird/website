<script setup lang="ts">
const props = defineProps<{pic: string, widepic: string, alt: string}>()
</script>

<template>
  <div>
    <picture>
      <source
        :srcset="widepic"
        sizes="(min-width: 1300px) 80vw"
        media="(min-width: 640px)"
        :alt="alt"
      >
      <img :src="pic" :alt="alt" class="m-auto">
    </picture>
  </div>
</template>
