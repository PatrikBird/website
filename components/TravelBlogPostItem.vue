<script setup lang='ts'>
import type { Post } from '~/types'

const props = defineProps<{ post: Post }>()
</script>

<template>
  <NuxtLink
    :to="props.post._path"
    class="border-none!"
  >
    <nuxt-img
      :src="props.post.imageUrl"
      class="my-0 h-52 w-full xs:rounded-lg object-cover"
      alt="blog post cover image"
      width="300"
    />
  </NuxtLink>
  <div class="flex flex-1 flex-col justify-between pb-6 text-left">
    <div class="flex-1">
      <NuxtLink :to="props.post._path">
        <p class="mt-0 font-mont text-xl font-semibold">
          {{ props.post.title }}
        </p>
      </NuxtLink>
      <p class="mb-0 mt-3 text-sm">
        {{ props.post.description }}
      </p>
    </div>
    <div class="mt-1 flex text-xs uppercase flex-row gap-2">
      <div class="flex flex-row gap3">
        <span>
          Published
        </span>
        <span class="font-semibold">
          <NuxtTime
            :datetime="props.post.date"
            day="numeric"
            month="short"
            year="numeric"
          />
        </span>
      </div>
      <span class="inline-block">
        &middot;
      </span>
      <div class="flex flex-row gap3">
        <span>
          Reading time
        </span>
        <span class="font-semibold">
          {{ props.post.readingTime.text.substring(0, 5) }}
        </span>
      </div>
    </div>
  </div>
</template>
