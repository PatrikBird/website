<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{ pic: string; alt: string }>()
</script>

<template>
  <figure>
    <img :src="pic" loading="lazy" :alt="alt" width="800" height="400">
    <figcaption>
      <slot>
        <p>{{ alt }}</p>
      </slot>
    </figcaption>
  </figure>
</template>
