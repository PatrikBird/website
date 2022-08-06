<script setup lang='ts'>
definePageMeta({
  layout: 'fullwidth'
})
</script>

<template>
  <NuxtLayout>
    <h2 class="text-3xl tracking-tight font-extrabold sm:text-4xl">
      From the blog
    </h2>
    <p class="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Ipsa libero labore natus atque, ducimus sed.
    </p>
    <div class="max-w-7xl mx-auto">
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <ContentList v-slot="{ list }" path="/blog" :query="{ sort: { date: -1 } }">
          <div
            v-for="article in list"
            :key="article._path"
            class="flex flex-col rounded-lg shadow-lg overflow-hidden dark:bg-primary-900"
          >
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="article.imageUrl" alt="">
            </div>
            <div class="flex-1 p-6 flex flex-col justify-between dark:bg-primary-900">
              <div class="flex-1">
                <p class="text-xl font-semibold">
                  {{ article.title }}
                </p>
                <p class="mt-3 text-base">
                  {{ article.description }}
                </p>
              </div>
            </div>
          </div>
        </ContentList>
      </div>
    </div>
  </NuxtLayout>
</template>
