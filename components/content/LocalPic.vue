<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  alt: string
  loading?: 'eager' | 'lazy'
}>(), {
  loading: 'lazy',
})
</script>

<template>
  <figure>
    <img
      :src="props.src"
      :alt="props.alt"
      :loading="props.loading"
      class="w-full"
      width="600"
    >
    <figcaption v-if="alt">
      {{ alt }}
    </figcaption>
  </figure>
</template>
