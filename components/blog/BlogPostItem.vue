<script setup lang='ts'>
const props = defineProps<{ article: any }>()
</script>

<template>
  <NuxtLink
    :to="props.article._path"
  >
    <img
      class="my-0 h-48 w-full rounded-lg object-cover"
      :src="props.article.imageUrl"
      width="630"
      height="290"
      alt="blog post cover image"
    >
    <!-- <nuxt-img
      class="my-0 h-48 w-full rounded-lg object-cover"
      :src="article.imageUrl"
      width="630"
      height="290"
      alt="blog post cover image"
      format="webp"
      quality="90"
    /> -->
  </NuxtLink>
  <div class="flex flex-1 flex-col justify-between pb-6 text-left">
    <div class="flex-1">
      <NuxtLink :to="props.article._path" class="no-underline">
        <p class="mt-0 font-mont text-xl font-semibold">
          {{ props.article.title }}
        </p>
      </NuxtLink>
      <p class="mt-3 mb-2 text-sm">
        {{ props.article.description }}
      </p>
    </div>
    <span class="text-xs italic">
      <time>
        {{ props.article.date }}
      </time>
      · {{ props.article.readingTime.text }}
    </span>
  </div>
</template>
