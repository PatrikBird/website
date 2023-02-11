<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

definePageMeta({
  layout: 'fullwidth'
})
useHead({
  title: 'Blog - Patrik Bird'
})
const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }] }
</script>

<template>
  <div>
    <NuxtLayout>
      <h2 class="text-3xl tracking-tight font-mont font-extrabold sm:text-4xl">
        Blog
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
        For now, the blog will be exclusively about my upcoming trip to update friends and family and is therefore written
        in German.
      </p>
      <div class="max-w-7xl mx-auto">
        <div class="mt-12 max-w-lg mx-auto grid gap-4 lg:grid-cols-3 lg:max-w-none">
          <ContentList v-slot="{ list }" :query="query" path="/blog">
            <NuxtLink
              v-for="article in list"
              :key="article._path"
              :to="article._path"
              class="flex flex-col no-underline rounded-lg shadow hover:shadow-lg bg-zinc-50 overflow-hidden opacity-90 hover:opacity-100 dark:bg-primary-700 transition-opacity duration-100 ease-in-out"
            >
              <div class="flex-shrink-0">
                <span class="text-xs italic">
                  <time>
                    {{ article.date }}
                  </time>
                  · Dauer: {{ article.readingTime }}
                </span>
                <img class="h-48 w-full object-cover mt-1" :src="article.imageUrl" width="630" height="290" alt="">
              </div>
              <div class="text-left flex-1 px-6 pb-6 flex flex-col justify-between dark:bg-primary-700">
                <div class="flex-1">
                  <p class="text-xl mt-0">
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
