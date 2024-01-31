<script setup lang="ts">
const props = defineProps<{
  items: any
  arrows: boolean
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

  return props.items.length - Math.round(carouselWidth.value / itemWidth.value) + 1
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
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-none snap-center basis-full"
      >
        <slot :item="item" :index="index" />
      </div>
    </div>

    <div v-if="arrows" class="flex items-center justify-between">
      <slot name="prev" :on-click="onClickPrev">
        <button
          v-show="!isFirst"
          class="rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2
          transform -translate-y-1/2 rounded-full border-none size-8 cursor-pointer 
          op75 hover:op100 bg-gray-200"
          aria-label="Prev"
          @click="onClickPrev"
        >
          <span i-material-symbols:chevron-left class="size-5 text-black" />
        </button>
      </slot>

      <slot name="next" :on-click="onClickNext">
        <button
          v-show="!isLast"
          class="rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2
          transform -translate-y-1/2 rounded-full border-none size-8 cursor-pointer 
          op75 hover:op100 bg-gray-200"
          aria-label="Next"
          @click="onClickNext"
        >
          <span i-material-symbols:chevron-right class="size-5 text-black" />
        </button>
      </slot>
    </div>

    <div v-if="indicators" class="absolute flex items-center justify-center gap-3 bottom-4 inset-x-0">
      <template v-for="index in indicatorsCount" :key="index">
        <slot name="indicator" :on-click="onClick" :active="index === currentIndex" :index="index">
          <button
            type="button"
            class="rounded-full size-3 border-none cursor-pointer"
            :class="[
              index === currentIndex ? 'bg-primary dark:bg-white' : 'bg-secondary dark:bg-gray-800',
            ]"
            :aria-label="`set slide ${index}`"
            @click="onClick(index)"
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
