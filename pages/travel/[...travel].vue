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

const { cleanString: cleanTitle, metaDesc } = useCleanString(currentParsedContent.title!)
</script>

<template>
  <div>
    <Html :lang="locale" />
    <ReadProgressBar />
    <ScrollToTop />
    <GoUpOnePageBtn />
    <header class="mb-7">
      <h1 class="text-4xl">
        {{ currentParsedContent.title }}
      </h1>
      <dl class="mt-1 flex flex-col text-xs uppercase sm:flex-row gap-2">
        <div class="flex flex-row">
          <dt>
            Published
          </dt>
          <dd class="font-semibold ml-3">
            <NuxtTime
              :datetime="currentParsedContent.date"
              day="numeric"
              month="long"
              year="numeric"
            />
          </dd>
        </div>
        <dd class="hidden m0 sm:inline-block">
          &middot;
        </dd>
        <div class="flex flex-row">
          <dt>
            Reading time
          </dt>
          <dd class="ml-3 font-semibold">
            {{ currentParsedContent.readingTime.text.substring(0, 5) }}
          </dd>
        </div>
      </dl>
    </header>
    <article>
      <ContentRendererMarkdown :value="currentParsedContent" tag="div" />
    </article>
  </div>
</template>

<style scoped>
header > h1 {
  view-transition-name: v-bind('cleanTitle');
}

header > dl {
  view-transition-name: v-bind('metaDesc');
}
</style>
