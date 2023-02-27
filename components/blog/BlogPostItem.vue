<script setup lang='ts'>
// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps<{ article: any }>()
</script>

<template>
  <NuxtLink
    :to="article._path"
  >
    <img
      class="my-0 h-48 w-full rounded-lg object-cover"
      :src="article.imageUrl" width="630" height="290" alt=""
    >
  </NuxtLink>
  <div class="flex flex-1 flex-col justify-between pb-6 text-left">
    <div class="flex-1">
      <NuxtLink :to="article._path" class="no-underline">
        <p class="mt-0 font-mont text-xl font-semibold">
          {{ article.title }}
        </p>
      </NuxtLink>
      <p class="mt-3 mb-2 text-sm">
        {{ article.description }}
      </p>
    </div>
    <span class="text-xs italic">
      <time>
        {{ article.date }}
      </time>
      · Dauer: {{ article.readingTime }}
    </span>
  </div>
</template>
