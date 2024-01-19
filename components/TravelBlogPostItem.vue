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
  <header class="flex flex-1 flex-col justify-between pb-6 text-left">
    <NuxtLink :to="props.post._path" class="border-none!">
        <h3 class="mt-0 font-mont text-xl font-semibold">
          {{ props.post.title }}
        </h3>
      </NuxtLink>
      <p class="mb-0 mt-3 text-sm">
        {{ props.post.description }}
      </p>
      <dl class="mt-1 flex text-xs uppercase flex-row gap-2">
      <div class="flex flex-row gap3">
        <dt>
          Published
          </dt>
          <dd class="font-semibold">
          <NuxtTime
            :datetime="props.post.date"
            day="numeric"
            month="short"
            year="numeric"
            class="dd"
          />
          </dd>
      </div>
        <dd class="inline-block">
        &middot;
        </dd>
      <div class="flex flex-row gap3">
        <dt>
          Reading time
          </dt>
        <dd class="font-semibold">
          {{ props.post.readingTime.text.substring(0, 5) }}
          </dd>
      </div>
      </dl>
    </header>
</template>

<style scoped>
header a h3 {
  view-transition-name: heading;
}
/* TODO: remove hacky .dt and .dd classes */
.dt {
  view-transition-name: published-dt;
}
.dd {
  view-transition-name: published-dd;
}
.reading-time-dt {
  view-transition-name: reading-time-dt;
}
.reading-time-dd {
  view-transition-name: reading-time-dd;
}
</style>
