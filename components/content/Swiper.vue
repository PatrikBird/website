<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  picUrls: string[]
}>()
</script>

<template>
  <swiper
    :slides-per-view="1"
    :space-between="10"
  >
    <swiper-slide v-for="pic in picUrls" :key="pic">
      <img :src="pic" alt="random">
    </swiper-slide>
  </swiper>
</template>
