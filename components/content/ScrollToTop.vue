<script setup lang='ts'>
const { y } = useWindowScroll()
const isHidden = computed(() => y.value < 2000)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <button
      type="button"
      :class="{ hidden: isHidden }"
      class="rounded-full border-none bg-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 bg-zinc-900 inline-block items-center justify-center cursor-pointer opacity-75 group fixed bottom-4 right-4 z-50 w-5 h-5 p-1 sm:bottom-12 sm:right-12"
      title="Scroll to top"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <Icon
        name="line-md:arrow-small-left"
        class="m-auto rotate-90 w-5 h-5 text-primary opacity-75 group-hover:opacity-100 dark:text-secondary"
      />
    </button>
  </div>
</template>
