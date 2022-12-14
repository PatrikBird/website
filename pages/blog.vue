<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'

definePageMeta({
  layout: 'fullwidth'
})
useHead({
  title: 'Blog - Patrik Bird'
})

const { data } = await useFetch('/api/pageview')
const time = useTimeAgo(computed(() => data.value!.startAt))
</script>

<template>
  <div>
    <NuxtLayout>
      <h2 class="text-3xl tracking-tight font-extrabold sm:text-4xl">
        Blog
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
        For now, the blog will be exclusively about my upcoming trip to inform friends and family and is therefore written
        in German.
      </p>
      <div class="max-w-7xl mx-auto">
        <div class="mt-12 max-w-lg mx-auto grid gap-4 lg:grid-cols-3 lg:max-w-none">
          <ContentList v-slot="{ list }" path="/blog/" :query="{where: { draft: { $ne:true } }, sort: { _file: -1 } }">
            <NuxtLink
              v-for="article in list"
              :key="article._path"
              :to="article._path"
              class="flex flex-col no-underline rounded-lg shadow hover:shadow-lg bg-zinc-50 dark:bg-zinc-800/50 overflow-hidden opacity-90 hover:opacity-100 dark:bg-primary-700 transition-opacity transition-shadow duration-100 ease-in-out"
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
    <div class="text-center opacity-10">
      <span>{{ data!.pageview }}</span>
      page views since
      <span>{{ time }}</span>
    </div>
  </div>
</template>
