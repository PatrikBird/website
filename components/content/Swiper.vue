<script lang="ts" setup>
// import Swiper core and required modules
import { Pagination, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  pics: string[][] // [src, alt]
}>()

const images = computed(() => {
  return props.pics.map((pic) => {
    return {
      src: pic[0],
      alt: pic[1]
    }
  })
})

const modules = [Pagination, Lazy]
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="image in images" :key="image.src">
      <!-- TODO: dont use postImg, create a new component instead -->
      <post-image :pic="image.src" :alt="image.alt">
        {{ image.alt }}
      </post-image>
    </swiper-slide>
  </swiper>
</template>
