<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

definePageMeta({
  layout: 'fullwidth',
})
useHead({
  title: 'Blog - Patrik Bird',
})
const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }] }
</script>

<template>
  <div>
    <NuxtLayout>
      <h2 class="font-mont text-3xl font-extrabold tracking-tight sm:text-4xl">
        Blog
      </h2>
      <p class="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
        For now, the blog will be exclusively about my upcoming trip to update friends and family and is therefore written
        in German.
      </p>
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto mt-12 grid max-w-lg gap-4 lg:max-w-none lg:grid-cols-3">
          <ContentList v-slot="{ list }" :query="query" path="/blog">
            <NuxtLink
              v-for="article in list"
              :key="article._path"
              :to="article._path"
              class="flex flex-col overflow-hidden rounded-lg bg-white no-underline opacity-90 shadow transition-opacity duration-100 ease-in-out hover:opacity-100 hover:shadow-lg dark:bg-zinc-800"
            >
              <div class="shrink-0">
                <span class="text-xs italic">
                  <time>
                    {{ article.date }}
                  </time>
                  · Dauer: {{ article.readingTime }}
                </span>
                <img class="mt-1 h-48 w-full object-cover" :src="article.imageUrl" width="630" height="290" alt="">
              </div>
              <div class="flex flex-1 flex-col justify-between px-6 pb-6 text-left dark:bg-zinc-800">
                <div class="flex-1">
                  <p class="mt-0 font-mont text-xl font-semibold">
                    {{ article.title }}
                  </p>
                  <p class="mt-3 mb-2 text-sm">
                    {{ article.description }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </ContentList>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
