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
      class="fixed right-4 z-50 sm:right-12 bottom-4 sm:bottom-12 group h-10 w-10 p-1 action-btn"
      title="Scroll to top"
      @click="scrollToTop"
    >
      <Icon name="line-md:arrow-small-left" class="rotate-90 opacity-75 group-hover:opacity-100 text-secondary-800 dark:text-primary-100" aria-hidden="true" />
    </button>
  </div>
</template>
