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
      alt: pic[1]
    }
  })
})

const modules = [Pagination]
</script>

<template>
  <swiper-container
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
  </swiper-container>
</template>
