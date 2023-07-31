<script setup lang='ts'>
import type { Post } from '~/types'

const props = defineProps<{ article: Post }>()
</script>

<template>
  <!-- <NuxtLink :to="props.article._path" class="no-underline">
    {{ props.article.title }}
  </NuxtLink> -->
  <div>test</div>
</template>
