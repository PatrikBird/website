<script setup>
import { register } from 'swiper/element/bundle'

register()

const images = [
  { src: '/travel/longtime/wimtarq1hinsia8mc95p.jpg', alt: 'Spazieren im Nationalpark' },
  { src: '/travel/longtime/ohayfldn3rzgakkhueyl.jpg', alt: 'Baum?!' },
  { src: '/travel/longtime/tmxgqgauhfp6cudaifxv.jpg', alt: 'Wasserfall mit Pools' },
]

// const isLoaded = ref(false)
// function imgLoad() {
//   isLoaded.value = true
//   console.log(` >> isLoaded:`, isLoaded.value)
// }

// const { pixelRatio } = useDevicePixelRatio()
// const density = computed(() => {
//   return `x${pixelRatio.value}`
// })
</script>

<template>
  <div class="w-full h-full bg-yellow">
    <swiper-container
      :slides-per-view="2"
      :space-between="10"
      :centered-slides="true"
      :pagination="{ clickable: true }"
      navigation="true"
      css-mode="true"
    >
      <swiper-slide
        v-for="image in images"
        :key="image.src"
        lazy="true"
      >
        <nuxt-img
          class="w-full"
          :src="image.src"
          :alt="image.alt"
          :placeholder="[75, 100, 75, 5]"
          loading="lazy"
          width="600"
        />
      </swiper-slide>
      <!-- <swiper-slide v-for="image in images" :key="image.src">
        <img
          v-show="!isLoaded"
          src="/cover.webp"
          class="w-full h-full object-cover"
        >
        <nuxt-img
          v-show="isLoaded"
          class="w-full h-full object-cover"
          :src="image.src"
          :alt="image.alt"
          :placeholder="[50, 100, 75, 5]"
          loading="lazy"
          width="600"
          :densities="density"
          @load="imgLoad"
        />
      </swiper-slide> -->
    </swiper-container>
  </div>
</template>
