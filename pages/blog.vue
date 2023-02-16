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
  <NuxtLayout>
    <h2 class="font-mont text-3xl font-extrabold tracking-tight sm:text-4xl">
      Blog
    </h2>
    <p class="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
      For now, the blog will be exclusively about my upcoming trip to update
      friends and family and is therefore written in German.
    </p>
    <div class="mx-auto max-w-7xl">
      <div
        class="mx-auto mt-12 grid max-w-lg gap-4
          lg:max-w-none lg:grid-cols-2 xl:grid-cols-3"
      >
        <ContentList v-slot="{ list }" :query="query" path="/blog">
          <article
            v-for="article in list"
            :key="article._path"
            class="flex flex-col gap-3 overflow-hidden rounded-lg"
          >
            <BlogPostItem :article="article" />
          </article>
        </ContentList>
      </div>
    </div>
  </NuxtLayout>
</template>
