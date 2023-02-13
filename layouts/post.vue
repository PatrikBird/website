<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <div>
    <Html lang="de" />
    <ReadProgressBar />
    <ScrollToTop />
    <div class="m-auto max-w-3xl px-4 py-10 dark:bg-primary-800 sm:rounded sm:px-8 sm:pt-14 lg:relative">
      <div class="prose prose-gray max-w-none dark:prose-invert">
        <NuxtLink
          class="action-btn group mb-8 flex h-10 w-10 lg:absolute  lg:-left-10"
          :to="route.path.split('/').slice(0, -1).join('/') || '/'"
          title="Back to blog"
        >
          <Icon name="line-md:arrow-small-left" class="text-teal-800 opacity-75 group-hover:opacity-100 dark:text-gray-100" aria-hidden="true" />
        </NuxtLink>
        <article>
          <slot />
        </article>
        <BlogPostFooter />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;

  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>
