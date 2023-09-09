<script setup lang='ts'>
import type { Post } from '~/types'

definePageMeta({
  layout: false,
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
  <main class="prose prose-zinc m-auto max-w-3xl px-4 py-10 dark:prose-invert sm:rounded sm:px-8 sm:pt-14 lg:relative">
    <Html lang="de" />
    <ReadProgressBar />
    <ScrollToTop />
    <GoUpOnePageBtn />
    <header v-if="currentParsedContent">
      <h1 class="text-4xl">
        {{ currentParsedContent.title }}
      </h1>
      <p>
        Published: {{ formatDate(currentParsedContent.date) }}
      </p>
      <p>
        Length: {{ currentParsedContent.readingTime.text }}
      </p>
    </header>
    <article>
      <ContentRendererMarkdown :value="currentParsedContent" tag="div" />
    </article>
  </main>
</template>
