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
      <p class="mb-0 mt-3 text-sm">
        {{ props.post.description }}
      </p>
    </div>
    <dl class="mt-1 flex flex-row gap-2 text-xs uppercase">
      <div class="flex flex-row">
        <dt class="font-normal">
          Published
        </dt>
        <dd class="self-end pl-2 font-semibold">
          <NuxtTime
            :datetime="props.post.date"
            day="numeric"
            month="long"
            year="numeric"
          />
        </dd>
      </div>
      <span class="inline-block self-end">&middot;</span>
      <div class="flex flex-row">
        <dt class="font-normal">
          Reading time
        </dt>
        <dd class="self-end pl-2 font-semibold">
          {{ props.post.readingTime.text.substring(0, 5) }}
        </dd>
      </div>
    </dl>
  </div>
</template>
