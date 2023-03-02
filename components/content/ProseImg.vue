<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<template>
  <figure>
    <nuxt-img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      format="webp"
      quality="90"
    />
    <figcaption>
      <p>{{ alt }}</p>
    </figcaption>
  </figure>
</template>
