<script setup lang='ts'>
import type { Post } from '~/types'

const props = defineProps<{ article: Post }>()
</script>

<template>
  <p>I am a tech Blog Post!</p>
  <!-- <NuxtLink
    :to="props.article._path"
  >
    <nuxt-img
      :src="props.article.imageUrl"
      class="my-0 h-52 w-full rounded-lg object-cover"
      alt="blog post cover image"
      preset="blogImg"
      provider="cloudinary"
      format="webp"
      quality="90"
    />
  </NuxtLink>
  <div class="flex flex-1 flex-col justify-between pb-6 text-left">
    <div class="flex-1">
      <NuxtLink :to="props.article._path" class="no-underline">
        <p class="mt-0 font-mont text-xl font-semibold">
          {{ props.article.title }}
        </p>
      </NuxtLink>
      <p class="mb-2 mt-3 text-sm">
        {{ props.article.description }}
      </p>
    </div>
    <span class="text-xs italic">
      <time>
        {{ props.article.date }}
      </time>
      · {{ props.article.readingTime.text }}
    </span>
  </div> -->
</template>
