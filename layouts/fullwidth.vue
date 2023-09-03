<template>
  <main class="prose prose-zinc m-auto max-w-none px-4 py-10 text-center dark:prose-invert sm:px-8 sm:pt-14">
    <slot>
      <h1 class="text-2xl">
        Page not found
      </h1>
    </slot>
  </main>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h1 a,
.prose h2 a,
.prose h3 a {
  @apply no-underline;

  &:hover {
    @apply border-b border-primary-600 dark:border-primary-300;
  }
}
</style>
