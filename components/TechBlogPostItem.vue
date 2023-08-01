<script setup lang='ts'>
import type { Post } from '~/types'

const props = defineProps<{ article: Post }>()
</script>

<template>
  <NuxtLink
    :to="props.article._path"
    class="color-base relative flex min-h-[40px] flex-col items-start gap-3 border no-underline transition-colors duration-150 md:flex-row"
  >
    <div class="md:self-center">
      {{ props.article.title }}
    </div>
    <div class="text-xs md:self-center">
      {{ formatDate(props.article.date) }} &times; {{ props.article.readingTime.text }}
    </div>
  </NuxtLink>
</template>
