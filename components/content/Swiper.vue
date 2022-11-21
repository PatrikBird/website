<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<template>
  <swiper
    :slides-per-view="1 "
    :space-between="10"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img src="https://www.patbird.me/blog/first/temple_ruins.webp" alt="random">
    </swiper-slide>
    <swiper-slide>
      <img src="https://www.patbird.me/blog/first/temple_ruins.webp" alt="random">
    </swiper-slide>
    <swiper-slide>
      <img src="https://www.patbird.me/blog/first/temple_ruins.webp" alt="random">
    </swiper-slide>
    <swiper-slide>
      <img src="https://www.patbird.me/blog/first/temple_ruins.webp" alt="random">
    </swiper-slide>
    <swiper-slide>
      <img src="https://www.patbird.me/blog/first/temple_ruins.webp" alt="random">
    </swiper-slide>
    <swiper-slide>
      <img src="https://www.patbird.me/blog/first/temple_ruins.webp" alt="random">
    </swiper-slide>
  </swiper>
</template>
