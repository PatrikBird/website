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
    <header class="flex-1">
      <NuxtLink :to="props.post._path">
        <h3 class="mt-0 font-mont text-xl font-semibold">
          {{ props.post.title }}
        </h3>
      </NuxtLink>
      <p class="mb-0 mt-3 text-sm">
        {{ props.post.description }}
      </p>
    </header>
    <div class="mt-1 flex text-xs uppercase flex-row gap-2">
      <div class="flex flex-row gap3">
        <span class="dt">
          Published
        </span>
        <span class="font-semibold">
          <NuxtTime
            :datetime="props.post.date"
            day="numeric"
            month="short"
            year="numeric"
            class="dd"
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
<!--
<style scoped>
header a h3 {
  view-transition-name: heading;
}

.dt {
  view-transition-name: published-dt;
}

.dd {
  view-transition-name: published-dd;
}
</style> -->
