<script setup lang="ts">
const props = defineProps<{
  images: {
    src: string
    alt: string
  }[]
  indicators: boolean
}>()

const carouselRef = ref<HTMLElement>()
const itemWidth = ref(0)

const { x, arrivedState } = useScroll(carouselRef, { behavior: 'smooth' })
const { width: carouselWidth } = useElementSize(carouselRef)

const { left: isFirst, right: isLast } = toRefs(arrivedState)

useCarouselScroll(carouselRef)

useResizeObserver(carouselRef, (entries) => {
  const [entry] = entries

  itemWidth.value = entry?.target?.firstElementChild?.clientWidth || 0
})

const currentIndex = computed(() => Math.round(x.value / itemWidth.value) + 1)

const indicatorsCount = computed(() => {
  if (!itemWidth.value)
    return 0

  return props.images.length - Math.round(carouselWidth.value / itemWidth.value) + 1
})

function onClickNext() {
  x.value += itemWidth.value
}

function onClickPrev() {
  x.value -= itemWidth.value
}

function onClick(index: number) {
  x.value = (index - 1) * itemWidth.value
}
</script>

<template>
  <div class="relative">
    <div
      ref="carouselRef"
      class="no-scrollbar relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
    >
      <div
        v-for="(image, index) in props.images"
        :key="index"
        class="flex flex-none snap-center basis-full"
      >
        <figure class="m0">
          <nuxt-img
            :src="image.src"
            :alt="image.alt"
            class="w-full"
            width="672"
          />
          <figcaption v-if="image.alt" class="pt1">
            {{ image.alt }}
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <slot name="prev" :on-click="onClickPrev">
        <button
          v-show="!isFirst"
          type="button"
          class="rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2
          transform -translate-y-1/2 rounded-full border-none size-8 p0 cursor-pointer
          op40 hover:op75 bg-gray-200"
          aria-label="Prev"
          @click="onClickPrev"
        >
          <span i-material-symbols:chevron-left class="size-5 text-black" />
        </button>
      </slot>

      <slot name="next" :on-click="onClickNext">
        <button
          v-show="!isLast"
          type="button"
          class="rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2
          transform -translate-y-1/2 rounded-full border-none size-8 p0 cursor-pointer
          op40 hover:op75 bg-gray-200"
          aria-label="Next"
          @click="onClickNext"
        >
          <span i-material-symbols:chevron-right class="size-5 text-black" />
        </button>
      </slot>
    </div>

    <div v-if="indicators" class="absolute bottom-4.5 left-0 w-full flex items-center justify-evenly gap-3">
      <template v-for="index in indicatorsCount" :key="index">
        <slot name="indicator" :active="index === currentIndex" :index="index">
          <span
            class="h-1 p0 m0 border-none"
            :style="{ width: `${100 / indicatorsCount}%` }"
            :class="[
              index === currentIndex ? 'bg-primary dark:bg-white' : 'bg-secondary dark:bg-gray-800',
            ]"
          />
        </slot>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
