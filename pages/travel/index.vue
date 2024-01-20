<script setup lang='ts'>
useHead({
  title: 'Travel Blog - Patrik Bird',
})

definePageMeta({
  layout: 'fullwidth',
})

const entries = await queryContent('/travel')
  .only(['title', 'date', '_path', 'description', 'imageUrl', 'readingTime'])
  .find()
  .then((result) => {
    return (result as Array<{
      title?: string
      date: string
      _path: string
      description?: string
      imageUrl?: string
      readingTime?: {
        text: string
      }
    }>)
      .map(e => ({
        ...e,
        path: e._path,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })

// const postsLatestQuery = queryContent<Post>('travel')
// // Selects only two kinds of paths:
// //   /travel/**
// //   /travel/**/index
//   .where({ _path: /^(?:\/[^\/]+){2}$/ })
//   .sort({ date: -1 })
//   .find()

// const allTravelPosts = computed(() => {
//   return postsLatestQuery.data.value
// })
</script>

<template>
  <main>
    <h1>Travel</h1>
    <p class="mx-auto mt-3 max-w-2xl text-lg sm:mt-4">
      For the time being, this blog will only be about my travels to update friends
      and family and is therefore written in German.
    </p>
    <div class="flex justify-center mx-auto max-w-7xl">
      <div
        class="mt-6 grid max-w-md gap-4 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="travelPost in entries"
          :key="travelPost.path"
          :title="travelPost.title"
          class="flex flex-col gap-3 overflow-hidden"
        >
          <TravelPostItem :post="travelPost" />
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
main > h1 {
  view-transition-name: headline;
}
</style>
