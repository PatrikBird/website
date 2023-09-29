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
      class="my-0 h-52 w-full xs:rounded-lg object-cover"
      alt="blog post cover image"
      width="450"
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
    <dl class="mt-1 flex text-xs uppercase flex-row gap-2">
      <div class="flex flex-row">
        <dt>
          Published
        </dt>
        <dd class="font-semibold ml-3">
          <NuxtTime
            :datetime="props.post.date"
            day="numeric"
            month="numeric"
            year="numeric"
          />
        </dd>
      </div>
      <dd class="inline-block m0">
        &middot;
      </dd>
      <div class="flex flex-row">
        <dt>
          Reading time
        </dt>
        <dd class="ml-3 font-semibold">
          {{ props.post.readingTime.text.substring(0, 5) }}
        </dd>
      </div>
    </dl>
  </div>
</template>
