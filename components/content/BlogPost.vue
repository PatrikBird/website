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
    <div class="pb-16 px-4 sm:pt-6 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
      <div class="lg:pl-8">
        <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto">
          <slot name="content">
            <p>no content provided</p>
          </slot>
        </div>
      </div>
    </div>
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
