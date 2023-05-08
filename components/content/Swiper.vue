<script lang="ts" setup>
import { Pagination } from 'swiper'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps<{
  pics: string[][] // [src, alt]
}>()

const images = computed(() => {
  return props.pics.map((pic) => {
    return {
      src: pic[0],
      alt: pic[1],
    }
  })
})

const modules = [Pagination]

const initialHeight = computed(() => {
  return '700px'
})
</script>

<template>
  <SwiperContainer
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    :pagination="{ clickable: true }"
    auto-height
    :lazy-preload-prev-next="1"
    :style="{ minHeight: initialHeight }"
  >
    <SwiperSlide v-for="image in images" :key="image.src">
      <prose-img
        :src="image.src"
        :pic="image.src"
        :alt="image.alt"
      >
        {{ image.alt }}
      </prose-img>
    </SwiperSlide>
  </SwiperContainer>
</template>
