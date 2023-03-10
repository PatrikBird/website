<script setup lang="ts">
const props = withDefaults(defineProps<{
  alt: string
  src: string
  lazy?: boolean | 'false' | 'true'
  width?: number | string
  height?: number | string
  landscape?: boolean
}>(), {
  lazy: true,
  width: '700',
  height: '900',
})

const loadingType = computed(() => {
  return (props.lazy === true || props.lazy === 'true') ? 'lazy' : 'eager'
})

const width = ref(props.width)
const height = ref(props.height)
if (props.landscape) {
  width.value = 1000
  height.value = 750
}
</script>

<template>
  <figure>
    <nuxt-img
      :src="props.src"
      :alt="props.alt"
      :width="width"
      :height="height"
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
