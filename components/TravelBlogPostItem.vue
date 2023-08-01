<script setup lang='ts'>
import type { Post } from '~/types'

const props = defineProps<{ post: Post }>()
</script>

<template>
  <NuxtLink
    :to="props.post._path"
  >
    <nuxt-img
      :src="props.post.imageUrl"
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
      <NuxtLink :to="props.post._path" class="no-underline">
        <p class="mt-0 font-mont text-xl font-semibold">
          {{ props.post.title }}
        </p>
      </NuxtLink>
      <p class="mb-2 mt-3 text-sm">
        {{ props.post.description }}
      </p>
    </div>
    <span class="text-xs italic">
      <time>
        {{ formatDate(props.post.date) }}
      </time>
      · {{ props.post.readingTime.text }}
    </span>
  </div>
</template>
