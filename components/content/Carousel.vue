<script setup lang="ts">
import { ref, watch, toRefs } from 'vue'
import { Navigation, Pagination, A11y, Lazy, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

const props = defineProps<{currentSlide: number, thumbs: any}>()

const swiperRef = ref(null)

const { currentSlide } = toRefs(props)
watch(currentSlide, () => {
  if (swiperRef.value !== null) {
    swiperRef.value.slideTo(props.currentSlide)
  }
})

function onSwiper (swiper) {
  swiperRef.value = swiper
}

</script>

<template>
  <Swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="[Navigation, Pagination, A11y, Lazy, Thumbs]"
    navigation
    :pagination="{ clickable: true, dynamicBullets: true }"
    grab-cursor
    :preload-images="false"
    lazy
    :thumbs="{ swiper: thumbs }"
    @swiper="onSwiper"
  >
    <SwiperSlide v-for="n in 20" :key="n" class="customSlide">
      <img :data-src="'https://picsum.photos/id/'+n+'/640/480'" class="swiper-lazy" style="width: 640px; max-width: 100%">
      <div class="swiper-lazy-preloader" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.customSlide {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>
