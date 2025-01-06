<script setup lang='ts'>
import type { Post } from '~/types'
import Article from './[...article].vue'

useHead({
  title: 'Articles - Patrik Bird',
})

definePageMeta({
  layout: 'articles',
})

const postsLatestQuery = useLazyAsyncData(
  'articles-latest-data',
  () => queryContent<Post>('articles')
    // Selects only two kinds of paths:
    //   /travel/**
    //   /travel/**/index
    .where({ _path: /^(?:\/[^/]+){2}$/ })
    .sort({ date: -1 })
    .find(),
)

const allArticles = computed(() => {
  return postsLatestQuery.data.value?.map(i => ({
    ...i,
    _path: i.external || i._path,
  }))
})
</script>

<template>
  <main>
    <h1>Articles</h1>
    <p class="mt-3 max-w-2xl sm:mt-4">
      Various technical articles, some published on other blogs and some here.
    </p>
    <div class="mx-auto max-w-7xl py-2 md:py-8">
      <div
        class="mx-auto mt-12 grid gap-6"
      >
        <article
          v-for="article in allArticles"
          :key="article._path"
        >
          <NuxtLink
            :to="article._path"
            class="border-none! relative flex min-h-[40px] flex-col items-baseline gap-3
            opacity-75 transition-opacity duration-200 hover:opacity-100 md:flex-row"
            :target="article._path?.startsWith('http') ? '_blank' : '_self'"
            rel="noopener"
          >
            <span class="flex items-center">
              <span
                v-if="article._locale === 'de'"
                class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 ml--8 mr-2 my-auto hidden md:block"
              >DE</span>
              {{ article.title }}
              <Icon
                v-if="article._path?.startsWith('http')"
                name="line-md:external-link"
                class="opacity-75 mx-2"
              />

              <div class="text-xs">
                <NuxtTime
                  :datetime="article.date"
                  day="numeric"
                  month="long"
                  year="numeric"
                /> <span v-if="!article.external">
                  · {{ article.readingTime.text.substring(0, 5) }}
                </span>
                <span
                  v-if="article._locale === 'de'"
                  class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden"
                >DE</span>
              </div>
            </span>
          </NuxtLink>
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
