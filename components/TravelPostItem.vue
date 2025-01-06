<script setup lang='ts'>
interface Post {
  title?: string
  date: string
  _path: string
  description?: string
  imageUrl?: string
  readingTime?: {
    text: string
  }
}

const props = defineProps<{ post: Post }>()

const { cleanString: cleanTitle, metaDesc, imgID, postDesc } = useCleanString(props.post.title!)
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
      width="600"
      preload
      loading="eager"
      :placeholder="[300, 150, 75, 5]"
    />
  </NuxtLink>
  <header class="flex flex-1 flex-col justify-between pb-6 text-left">
    <NuxtLink :to="post._path" class="border-none!">
      <h2 class="mt-0 font-mont text-xl font-semibold">
        {{ post.title }}
      </h2>
    </NuxtLink>
    <p class="mb-0 mt-3 text-sm">
      {{ post.description }}
    </p>
    <dl class="mt-1 flex text-xs uppercase flex-row gap-2">
      <div class="flex flex-row gap-3">
        <dt>
          Published
        </dt>
        <dd class="font-semibold">
          <NuxtTime
            :datetime="post.date"
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
      <div class="flex flex-row gap-3">
        <dt>
          Reading time
        </dt>
        <dd class="font-semibold">
          {{ post.readingTime?.text.substring(0, 5) }}
        </dd>
      </div>
    </dl>
  </header>
</template>

<style scoped>
header > a > h2  {
  view-transition-name: v-bind('cleanTitle');
}
header > p {
  view-transition-name: v-bind('postDesc');
}
header > dl {
  view-transition-name: v-bind('metaDesc');
}
a > img {
  view-transition-name: v-bind('imgID');
}
</style>
