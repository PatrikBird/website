<script setup lang='ts'>
const props = defineProps<{ path: string }>()

const { data: posts } = await usePosts(`${props.path}`)
</script>

<template>
  <p class="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
    <slot />
  </p>
  <div class="mx-auto max-w-7xl">
    <div
      class="mx-auto mt-12 grid max-w-md gap-4 lg:max-w-none lg:grid-cols-3"
    >
      <article
        v-for="article in posts"
        :key="article._path"
        class="flex flex-col gap-3 overflow-hidden rounded-lg"
      >
        <BlogPostItem :article="article" />
      </article>
    </div>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 {
  @apply my-4 lg:my-10;
}
</style>
