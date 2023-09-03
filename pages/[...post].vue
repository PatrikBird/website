<script setup lang='ts'>
const visible = ref(false)

function handleScroll() {
  if (window.scrollY < 2000)
    visible.value = false
  else
    visible.value = true
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main>
    <!-- <Html lang="de" /> -->
    <ReadProgressBar />
    <ScrollToTop v-show="visible" />
    <div class="m-auto max-w-3xl px-4 py-10 sm:rounded sm:px-8 sm:pt-14 lg:relative">
      <div class="prose prose-zinc max-w-none dark:prose-invert">
        <GoUpOnePageBtn />
        <article>
          <ContentDoc />
        </article>
      </div>
    </div>
  </main>
</template>
