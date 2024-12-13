<script setup>
import { register } from 'swiper/element/bundle'

register()

const images = [
  { src: '/travel/longtime/wimtarq1hinsia8mc95p.avif', alt: 'Spazieren im Nationalpark' },
  { src: '/travel/longtime/ohayfldn3rzgakkhueyl.avif', alt: 'Baum?!' },
  { src: '/travel/longtime/tmxgqgauhfp6cudaifxv.avif', alt: 'Wasserfall mit Pools' },
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
      :slides-per-view="1"
      :space-between="10"
      :centered-slides="true"
      :pagination="{ clickable: true }"
      navigation
      css-mode
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
