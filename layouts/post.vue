<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <div>
    <ReadProgressBar />
    <ScrollToTop />
    <div class="max-w-3xl px-4 py-10 m-auto sm:px-8 sm:pt-14 dark:bg-primary-800 sm:rounded lg:relative">
      <div class="prose prose-gray dark:prose-invert max-w-none">
        <NuxtLink
          class="group mb-8 flex h-10 w-10 lg:absolute lg:top-15 lg:-left-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
          :to="route.path.split('/').slice(0, -1).join('/') || '/'"
        >
          <Icon name="line-md:arrow-small-left" class="opacity-75 group-hover:opacity-100 text-secondary-800 dark:text-primary-100" aria-hidden="true" />
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
