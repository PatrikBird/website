<script setup lang='ts'>
import type { Post } from '~/types'

useHead({
  title: 'Travel Blog - Patrik Bird',
})

definePageMeta({
  layout: 'fullwidth',
})

const postsLatestQuery = useLazyAsyncData(
  'travel-latest-data',
  () => queryContent<Post>('travel')
    // Selects only two kinds of paths:
    //   /travel/**
    //   /travel/**/index
    .where({ _path: /^(?:\/[^\/]+){2}$/ })
    .sort({ date: -1 })
    .find(),
)

const allTravelPosts = computed(() => {
  return postsLatestQuery.data.value
})
</script>

<template>
  <main class="m-auto">
    <h1>Travel</h1>
    <p class="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
      For the time being, this blog will only be about my travels to update friends
      and family and is therefore written in German.
    </p>
    <div class="mx-auto max-w-7xl">
      <div
        class="mx-auto mt-12 grid max-w-md gap-4 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="travelPost in allTravelPosts"
          :key="travelPost._path"
          :to="travelPost._path"
          :title="travelPost.title"
          class="flex flex-col gap-3 overflow-hidden rounded-lg"
        >
          <TravelBlogPostItem :post="travelPost" />
        </article>
      </div>
    </div>
  </main>
</template>
