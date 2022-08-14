<script setup lang="ts">
import { Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

// const props = defineProps<{currentSlide: number}>()
const emit = defineEmits<{(event: 'thumbs'): void; (event: 'update:currentSlide', id: number): void}>()

function onSwiper (_swiper) {
  // emit('thumbs', swiper)
  emit('thumbs')
}

</script>

<template>
  <Swiper :slides-per-view="10" :space-between="50" :modules="[Thumbs]" watch-slides-progress @swiper="onSwiper">
    <SwiperSlide v-for="n in 20" :key="n" @click.stop="emit('update:currentSlide', Number(n) - 1)">
      <img :src="'https://picsum.photos/id/'+n+'/640/480'" style="height: 100px">
    </SwiperSlide>
  </Swiper>
</template>
