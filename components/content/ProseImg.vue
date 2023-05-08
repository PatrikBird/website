<script setup lang="ts">
const props = withDefaults(defineProps<{
  alt: string
  src: string
  lazy?: boolean | 'false' | 'true'
}>(), {
  lazy: true,
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
      class="w-full"
      :loading="loadingType"
      preset="blogImg"
      provider="cloudinary"
      format="webp"
      quality="95"
    />
    <figcaption v-if="alt">
      {{ alt }}
    </figcaption>
  </figure>
</template>
