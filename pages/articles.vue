<script setup lang='ts'>
const { data: articles } = await usePosts('articles/')
</script>

<template>
  <main class="prose prose-zinc m-auto max-w-none px-4 py-10 text-center dark:prose-invert sm:px-8 sm:pt-14">
    <h1>Articles</h1>
    <p class="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
      Tech articles introduction blabla.
    </p>
    <div class="mx-auto max-w-7xl">
      <div
        class="mx-auto mt-12 grid gap-6 px-6"
      >
        <article
          v-for="article in articles"
          :key="article._path"
        >
          <TechBlogPostItem :article="article" />
        </article>
      </div>
    </div>
  </main>
</template>
