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
    //   /posts/**
    //   /posts/**/index
    .where({ _path: /^(?:\/[^\/]+){2}$/ })
    // .only(['_path', ...POST_MODEL_FIELDS])
    .sort({ date: -1 })
    .find(),
)

const allTravelPosts = computed(() => {
  return postsLatestQuery.data.value
})


// const entries = await queryContent('/travel')
//   .only(['title', 'date', '_path'])
//   .find()
//   .then((result) => {
//     return (result as Array<{ title?: string; date: string; _path: string; imageUrl: string }>)
//       .map(e => ({
//         ...e,
//         path: e._path,
//       }))
//       .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//   })
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
          v-for="travelPost in allTravelPosts"
          :key="travelPost._path"
          :to="travelPost._path"
          :title="travelPost.title"
          class="flex flex-col gap-3 overflow-hidden rounded-lg"
        >
          <TravelBlogPostItem :post="travelPost" />
          <!-- <header>
            <span>
              {{ title }}
            </span>
            <dl
              v-if="date"
              class="mt-1 block flex-row flex-wrap text-xs uppercase leading-normal md:flex"
            >
              <dt class="float-left mr-2 md:float-none">
                Published
              </dt>
              <dd class="mr-4 font-semibold">
                <NuxtTime
                  :datetime="date"
                  day="numeric"
                  month="long"
                  year="numeric"
                />
              </dd>
            </dl>
          </header> -->
        </article>
      </div>
    </div>
  </main>
</template>
