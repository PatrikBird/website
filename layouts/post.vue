<template>
  <div class="px-6 pb-16 pt-10 sm:px-6 mx-auto py-2 m-auto mx-auto lg:pl-8 dark:bg-primary-800 sm:rounded">
    <main class="text-base max-w-prose prose prose-gray text-left max-w-7xl dark:prose-invert">
      <article>
        <slot />
      </article>
    </main>
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
