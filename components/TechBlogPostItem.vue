<script setup lang='ts'>
import type { Post } from '~/types'

const props = defineProps<{ article: Post }>()
</script>

<template>
  <NuxtLink
    :to="props.article._path"
    class="relative flex min-h-[40px] flex-col items-start gap-3 border
    no-underline opacity-75 transition-opacity duration-200 hover:opacity-100 md:flex-row"
  >
    <div class="md:self-center">
      {{ props.article.title }}
    </div>
    <div class="text-xs md:self-center">
      {{ formatDate(props.article.date) }} &times; {{ props.article.readingTime.text }}
    </div>
  </NuxtLink>
</template>
