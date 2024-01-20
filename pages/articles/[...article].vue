<script setup lang='ts'>
import type { Post } from '~/types'

definePageMeta({
  layout: 'post',
})

const currentPath = useRoute().path
const currentPost = await useAsyncData(`post-[${currentPath}]`, () =>
  queryContent<Post>(currentPath).findOne())

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

const locale = currentPost.data.value?._locale
</script>

<template>
  <main>
    <Html :lang="locale" />
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
