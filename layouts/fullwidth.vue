<template>
  <div class="m-auto py-10 dark:bg-primary-800 sm:rounded sm:px-8">
    <main class="prose prose-gray mx-auto max-w-none px-4 text-center text-gray-500 dark:prose-invert dark:text-gray-100 sm:px-8 sm:pt-14">
      <slot>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </slot>
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
