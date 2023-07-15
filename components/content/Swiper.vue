<script lang="ts" setup>
import { Pagination } from 'swiper/modules'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/vue'
import type { SwiperImage } from '~/types'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps<{
  pics: SwiperImage[]
}>()

const modules = [Pagination]

const initialHeight = computed(() => {
  return '300px'
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
