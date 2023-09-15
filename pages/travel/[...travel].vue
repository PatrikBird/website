<script setup lang='ts'>
import type { Post } from '~/types'

definePageMeta({
  layout: 'post',
})

const currentPath = useRoute().path
const currentPost = await useAsyncData(`post-[${currentPath}]`, () => queryContent<Post>(currentPath).findOne())

const currentError = currentPost.error.value
if (currentError)
  throw currentError

const currentParsedContent = currentPost.data.value
if (!currentParsedContent) {
  throw createError({
    statusCode: 404,
    message: `Post not found at location '${currentPath}'`,
  })
}
</script>

<template>
  <main>
    <Html lang="de" />
    <ReadProgressBar />
    <ScrollToTop />
    <GoUpOnePageBtn />
    <PostHeader
      :title="currentParsedContent.title!"
      :date="currentParsedContent.date"
      :reading-time="currentParsedContent.readingTime"
    />
    <article>
      <ContentRendererMarkdown :value="currentParsedContent" tag="div" />
    </article>
  </main>
</template>

<!-- <style scoped>
h1 {
  view-transition-name: header;
}
</style> -->
