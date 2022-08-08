<template>
  <article>
    <div class="overflow-hidden">
      <slot name="featpic">
        <p>no pic found</p>
      </slot>
    </div>
    <div class="relative mb-8">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300" />
      </div>
    </div>
    <slot>
      <p>no value here</p>
    </slot>
  </article>
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
