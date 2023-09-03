<script setup lang='ts'>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <button
      type="button"
      class="action-btn group fixed bottom-4 right-4 z-50 h-10 w-10 p-1 sm:bottom-12 sm:right-12"
      title="Scroll to top"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <Icon
        name="line-md:arrow-small-left"
        class="rotate-90 text-secondary-800 opacity-75 group-hover:opacity-100 dark:text-primary-100"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
