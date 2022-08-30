<template>
  <div>
    <ReadProgressBar />
    <ScrollToTop />
    <div class="max-w-3xl px-4 py-10 m-auto sm:px-8 sm:pt-14 dark:bg-primary-800 sm:rounded">
      <div class="prose prose-gray dark:prose-invert max-w-none">
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
