<script setup lang='ts'>
import type { Post } from '~/types'

useHead({
  title: 'Articles - Patrik Bird',
})

definePageMeta({
  layout: 'fullwidth',
})

const postsLatestQuery = useLazyAsyncData(
  'articles-latest-data',
  () => queryContent<Post>('articles')
    // Selects only two kinds of paths:
    //   /travel/**
    //   /travel/**/index
    .where({ _path: /^(?:\/[^\/]+){2}$/ })
    .sort({ date: -1 })
    .find(),
)

const allArticles = computed(() => {
  return postsLatestQuery.data.value
})
</script>

<template>
  <main>
    <h1>Articles</h1>
    <p class="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
      Bla intro technical articles here.
    </p>
    <div class="mx-auto max-w-7xl">
      <div
        class="mx-auto mt-12 grid gap-6 px-6"
      >
        <article
          v-for="article in allArticles"
          :key="article._path"
        >
          <NuxtLink
            :to="article._path"
            class="relative flex min-h-[40px] flex-col items-start gap-3 border no-underline opacity-75 transition-opacity duration-200 hover:opacity-100 md:flex-row"
          >
            <div class="md:self-center">
              {{ article.title }}
            </div>
            <div class="text-xs md:self-center">
              <NuxtTime
                :datetime="article.date"
                day="numeric"
                month="long"
                year="numeric"
              /> · {{ article.readingTime.text.substring(0, 5) }}
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  view-transition-name: header;
}
</style>
