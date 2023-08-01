<script setup lang='ts'>
const { data: articles } = await usePosts('articles/')
</script>

<template>
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
</template>
