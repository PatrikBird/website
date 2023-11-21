<template>
  <div class="max-w-2xl px-4 py-10 m-auto sm:px-8 sm:pt-14 dark:bg-primary-800 sm:rounded">
    <main class="prose prose-gray dark:prose-invert max-w-none">
      <slot />
    </main>
    <p>bLALBALBLABLA</p>
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
