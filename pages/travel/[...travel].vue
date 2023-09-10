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
    <header>
      <h1 class="text-4xl">
        {{ currentParsedContent.title }}
      </h1>
      <dl class="mt-1 flex flex-row flex-wrap text-xs uppercase">
        <dt class="font-normal">
          Published
        </dt>
        <dd class="mr-5 self-end pl-3 font-semibold">
          <NuxtTime
            :datetime="currentParsedContent.date"
            day="numeric"
            month="long"
            year="numeric"
          />
        </dd>
        <dt class="font-normal">
          Reading time
        </dt>
        <dd class="self-end pl-3 font-semibold">
          {{ currentParsedContent.readingTime.text.substring(0, 5) }}
        </dd>
      </dl>
    </header>
    <article>
      <ContentRendererMarkdown :value="currentParsedContent" tag="div" />
    </article>
  </main>
</template>

<style scoped>
h1 {
  view-transition-name: header;
}
</style>
