<script setup lang="ts">
import GoogleMaps from '~~/components/GoogleMaps.vue';
definePageMeta({
  layout: "fullwidth",
  documentDriven: {
    page: false,
  },
});
</script>

<template>
  <NuxtLayout>
    <h2 class="text-3xl tracking-tight font-extrabold sm:text-4xl">
      From the blog
    </h2>
    <p class="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
      labore natus <a href="http://google.de">Google.de</a>
      atque, ducimus sed.
    </p>
    <div class="max-w-7xl mx-auto">
      <GoogleMaps></GoogleMaps>
      <div class="mt-12 max-w-lg mx-auto grid gap-4 lg:grid-cols-3 lg:max-w-none">
        <ContentList v-slot="{ list }" path="/blog/" :query="{ sort: { date: -1 } }">
          <NuxtLink v-for="article in list" :key="article._path" :to="article._path"
            class="flex flex-col no-underline rounded-lg shadow-lg hover:shadow-xl border dark:border-primary-700 overflow-hidden dark:bg-primary-700 transition-all duration-200 ease-in-out">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="article.imageUrl" width="630" height="290" alt="" />
            </div>
            <div class="flex-1 px-6 pb-6 flex flex-col justify-between dark:bg-primary-700">
              <div class="flex-1">
                <p class="text-xl font-semibold">
                  {{ article.title }}
                </p>
                <p class="mt-3 text-base">
                  {{ article.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </ContentList>
      </div>
    </div>
  </NuxtLayout>
</template>
