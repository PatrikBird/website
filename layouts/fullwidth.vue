<template>
  <main
    class="prose m-auto max-w-none py-10 px-4 text-center dark:prose-invert sm:px-12 sm:pt-14"
  >
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
    @apply border-b border-zinc-600 dark:border-zinc-300;
  }
}
</style>
