<template>
  <div class="py-10 m-auto sm:px-8 dark:bg-primary-800 sm:rounded">
    <main class="px-4 mx-auto sm:px-8 sm:pt-14 prose prose-gray text-center text-primary dark:text-primary-100 max-w-none dark:prose-invert">
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
