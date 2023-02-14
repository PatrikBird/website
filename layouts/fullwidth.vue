<template>
  <div class="m-auto py-10 sm:rounded sm:px-8">
    <main class="prose mx-auto max-w-none px-4 text-center dark:prose-invert sm:px-8 sm:pt-14">
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
