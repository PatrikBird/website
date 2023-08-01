<script setup lang='ts'>
const { data: posts } = await usePosts('travel/')
</script>

<template>
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
</template>
