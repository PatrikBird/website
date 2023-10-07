<script setup lang="ts">
import type { SwiperImage } from '~/types'

interface ProseImgProps extends SwiperImage {
  loading?: 'eager' | 'lazy'
}
const props = withDefaults(defineProps<ProseImgProps>(), {
  loading: 'lazy',
})
</script>

<template>
  <figure>
    <nuxt-img
      :src="props.src"
      :alt="props.alt"
      :loading="loading"
      class="w-full"
      width="600"
    />
    <figcaption v-if="alt">
      {{ alt }}
    </figcaption>
  </figure>
</template>
