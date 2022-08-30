<script setup lang='ts'>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const isHidden = computed(() => y.value < 700)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <button
      type="button"
      :class="{ hidden: isHidden }"
      class="fixed right-4 md:right-12 bottom-4 md:bottom-12 p-1 rounded-full shadow-sm text-white bg-accent hover:bg-accent-800"
      @click="scrollToTop"
    >
      <Icon name="material-symbols:arrow-circle-up-outline-rounded" class="h-7 w-7" aria-hidden="true" />
    </button>
  </div>
</template>
