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
    :lazy-preload-prev-next="2"
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

<style lang="postcss">
.swiper-button-prev,
.swiper-button-next {
  color: rgb(17 94 89);
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255,255,255, 0.5);
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 1em;
}

.swiper-pagination-bullet {
  @apply bg-black dark:bg-white;
}

.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
  @apply mb--10px;
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  display: none;
}

@media (max-width: 640px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }
}
</style>
