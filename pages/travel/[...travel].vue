<script setup lang='ts'>
import type { Post } from '~/types'

definePageMeta({
  layout: false,
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

const { cleanString: cleanTitle, metaDesc, imgID, postDesc } = useCleanString(currentParsedContent.title!)
</script>

<template>
  <div>
    <Html :lang="locale" />
    <ReadProgressBar />
    <ScrollToTop />
    <div class="hidden lg:block h-[75vh] w-full">
      <nuxt-img
        :src="currentParsedContent.imageUrl"
        alt="cover"
        class="object-cover h-full w-full"
        loading="eager"
      />
    </div>
    <div
      class="prose prose-zinc m-auto max-w-3xl px-1 pb-10
      dark:prose-invert sm:(rounded px-8 pt-4) lg:relative"
    >
      <GoUpOnePageBtn />
      <header class="mb-7">
        <h1 class="text-4xl">
          {{ currentParsedContent.title }}
        </h1>
        <span class="text-sm"> {{ currentParsedContent.description }}</span>
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
  </div>
</template>

<style scoped>
header > h1 {
  view-transition-name: v-bind('cleanTitle');
}

header > span {
  view-transition-name: v-bind('postDesc');
}

header > dl {
  view-transition-name: v-bind('metaDesc');
}

div > img {
  view-transition-name: v-bind('imgID');
}
</style>
