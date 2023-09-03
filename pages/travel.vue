<script setup lang='ts'>
const { data: posts } = await usePosts('travel/')

// watchEffect(() => {
//   console.log(posts.value)
// })
</script>

<template>
  <main class="prose prose-zinc m-auto max-w-none px-4 py-10 text-center dark:prose-invert sm:px-8 sm:pt-14">
    <h1 class="font-mont">
      Travel
    </h1>
    <p class="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
      For the time being, this blog will only be about my travels to update friends
      and family and is therefore written in German.
    </p>
    <div class="mx-auto max-w-7xl">
      <div
        class="mx-auto mt-12 grid max-w-md gap-4 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post._path"
          class="flex flex-col gap-3 overflow-hidden rounded-lg"
        >
          <TravelBlogPostItem :post="post" />
        </article>
      </div>
    </div>
  </main>
</template>

<!-- <style lang="postcss">
/* Customize headers to remove default underline */
.prose h1 a,
.prose h2 a,
.prose h3 a {
  @apply no-underline;

  &:hover {
    @apply border-b border-primary-600 dark:border-primary-300;
  }
}
</style> -->
