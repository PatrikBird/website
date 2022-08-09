<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{pic: string, alt: string}>()
</script>

<template>
  <img :src="pic" :alt="alt" width="600" height="400">
</template>
