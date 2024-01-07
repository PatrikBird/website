<template>
  <div
    class="post-layout prose prose-zinc m-auto max-w-3xl px-1 py-10 dark:prose-invert
    sm:(rounded px-8 pt-14) lg:relative"
  >
    <slot />
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline hover:(border-b-solid border-zinc-600) dark:hover:border-zinc-300;
}
</style>
