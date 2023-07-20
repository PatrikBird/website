<script setup lang='ts'>
const { prev, next } = useContent()

const filteredPrev = computed(() => {
  return prev.value && prev.value._dir !== 'travel' ? prev.value : null
})
const filteredNext = computed(() => {
  return next.value && next.value._dir !== 'travel' ? next.value : null
})
const hasTwoAdjacentBlogPosts = computed(() => {
  return !!(filteredPrev.value && filteredNext.value)
})

// watchEffect(() => {
//   console.log(filteredNext.value)
// })
</script>

<template>
  <footer class="py-10">
    <p class="pb-4 text-center font-mont text-2xl font-bold">
      Weitere Beiträge
    </p>
    <div
      class="flex flex-col gap-5 rounded-lg sm:grid"
      :class="{
        'lg:grid-cols-2': hasTwoAdjacentBlogPosts,
        'max-w-2xl': !hasTwoAdjacentBlogPosts,
      }"
    >
      <BlogPostPreview :post="prev" label="Vorheriger Beitrag" />
      <BlogPostPreview :post="next" label="Nächster Beitrag" reverse />
    </div>
  </footer>
</template>
