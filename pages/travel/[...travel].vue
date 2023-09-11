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
      <dl class="mt-1 flex flex-col text-xs uppercase sm:flex-row sm:gap-5">
        <div class="flex flex-row">
          <dt class="font-normal">
            Published
          </dt>
          <dd class="self-end font-semibold">
            <NuxtTime
              :datetime="currentParsedContent.date"
              day="numeric"
              month="long"
              year="numeric"
            />
          </dd>
        </div>
        <span class="hidden self-end sm:inline-block">&middot;</span>
        <div class="flex flex-row">
          <dt class="font-normal">
            Reading time
          </dt>
          <dd class="self-end font-semibold">
            {{ currentParsedContent.readingTime.text.substring(0, 5) }}
          </dd>
        </div>
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
