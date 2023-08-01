<script setup lang='ts'>
import type { Post } from '~/types'

const props = defineProps<{ article: Post }>()
</script>

<template>
  <NuxtLink
    :to="props.article._path"
    class="relative flex flex-col items-center gap-4 border no-underline md:flex-row"
  >
    <div>
      {{ props.article.title }}
    </div>
    <div class="text-xs">
      {{ formatDate(props.article.date) }} · {{ props.article.readingTime.text }}
    </div>
  </NuxtLink>
</template>
