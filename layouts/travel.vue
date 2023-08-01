<template>
  <div>
    <main>
      <Html lang="de" />
      <ReadProgressBar />
      <ScrollToTop />
      <div class="m-auto max-w-3xl px-4 py-10 sm:rounded sm:px-8 sm:pt-14 lg:relative">
        <div class="prose prose-gray max-w-none dark:prose-invert">
          <GoUpOnePageBtn />
          <article>
            <slot />
          </article>
        </div>
      </div>
    </main>
    <BlogPostFooter class="mx-auto max-w-2xl lg:max-w-4xl" />
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;

  &:hover {
    @apply border-b border-zinc-600 dark:border-zinc-300;
  }
}
</style>
