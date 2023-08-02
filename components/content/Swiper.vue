<script lang="ts" setup>
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/vue'
import type { SwiperImage } from '~/types'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const props = defineProps<{
  pics: SwiperImage[]
}>()

const modules = [Navigation, Pagination]

const initialHeight = computed(() => {
  return '300px'
})
</script>

<template>
  <SwiperContainer
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    navigation
    :pagination="{ clickable: true }"
    auto-height
    :lazy-preload-prev-next="1"
    :style="{ minHeight: initialHeight }"
  >
    <SwiperSlide v-for="pic in props.pics" :key="pic.src">
      <prose-img
        :src="pic.src"
        :pic="pic.src"
        :alt="pic.alt"
      >
        {{ pic.alt }}
      </prose-img>
    </SwiperSlide>
  </SwiperContainer>
</template>

<style>
.swiper-button-prev,
.swiper-button-next {
  color: rgb(17 94 89);
  padding: 1.5rem;
  border-radius: 100%;
  background-color: rgba(255,255,255, 0.9);
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 1.2rem;
}
.swiper-pagination-bullet {
  background-color: black;
}
</style>
