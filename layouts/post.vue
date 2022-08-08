<template>
  <div class="py-2 m-auto sm:shadow dark:bg-primary-800 sm:rounded">
    <main class="px-2 mx-auto prose prose-gray text-center text-primary dark:text-primary-100 max-w-none dark:prose-invert">
      <slot>
        <!-- <h1 class="text-2xl">
          Blog post not found
        </h1> -->
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
