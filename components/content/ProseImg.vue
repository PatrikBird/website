<script setup lang="ts">
const props = withDefaults(defineProps<{
  alt: string
  src: string
  lazy?: boolean | 'false' | 'true'
  width?: number | string
  height?: number | string
}>(), {
  lazy: true,
  width: '600',
  height: '800',
})

const loadingType = computed(() => {
  return (props.lazy === true || props.lazy === 'true') ? 'lazy' : 'eager'
})
</script>

<template>
  <figure>
    <nuxt-img
      :src="props.src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      :loading="loadingType"
      preset="blogImg"
      provider="cloudinary"
      format="webp"
      quality="90"
    />
    <figcaption v-if="alt">
      {{ alt }}
    </figcaption>
  </figure>
</template>
