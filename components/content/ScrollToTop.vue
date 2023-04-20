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
      class="action-btn group fixed bottom-4 right-4 z-50 h-10 w-10 p-1 sm:bottom-12 sm:right-12"
      title="Scroll to top"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <Icon name="line-md:arrow-small-left" class="rotate-90 text-teal-800 opacity-75 group-hover:opacity-100 dark:text-gray-100" aria-hidden="true" />
    </button>
  </div>
</template>
