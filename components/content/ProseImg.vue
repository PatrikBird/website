<script setup lang="ts">
import type { SwiperImage } from '~/types'

interface ProseImgProps extends SwiperImage {
  lazy?: boolean | 'false' | 'true'
}
const props = withDefaults(defineProps<ProseImgProps>(), {
  lazy: true,
})

const loadingType = computed(() =>
  (props.lazy === true || props.lazy === 'true') ? 'lazy' : 'eager',
)
</script>

<template>
  <figure>
    <nuxt-img
      :src="props.src"
      :alt="props.alt"
      :loading="loadingType"
      class="w-full"
      provider="cloudinary"
      format="webp"
      width="600"
      quality="95"
    />
    <figcaption v-if="alt">
      {{ alt }}
    </figcaption>
  </figure>
</template>
