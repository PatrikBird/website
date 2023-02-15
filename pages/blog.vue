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
        <div
          class="mx-auto mt-12 grid max-w-lg gap-4 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3"
        >
          <ContentList v-slot="{ list }" :query="query" path="/blog">
            <article
              v-for="article in list"
              :key="article._path"
              class="flex flex-col gap-3 overflow-hidden rounded-lg"
            >
              <NuxtLink
                :to="article._path"
              >
                <img
                  class="my-0 h-48 w-full rounded-lg object-cover"
                  :src="article.imageUrl" width="630" height="290" alt=""
                >
              </NuxtLink>
              <div class="flex flex-1 flex-col justify-between pb-6 text-left">
                <div class="flex-1">
                  <NuxtLink :to="article._path" class="no-underline">
                    <p class="mt-0 font-mont text-xl font-semibold">
                      {{ article.title }}
                    </p>
                  </NuxtLink>
                  <p class="mt-3 mb-2 text-sm">
                    {{ article.description }}
                  </p>
                </div>
                <span class="text-xs italic">
                  <time>
                    {{ article.date }}
                  </time>
                  · Dauer: {{ article.readingTime }}
                </span>
              </div>
            </article>
          </ContentList>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
