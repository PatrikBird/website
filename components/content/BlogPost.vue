<template>
  <article>
    <!-- Featured Img -->
    <div class="overflow-hidden">
      <slot name="featpic">
        <p>no pic found</p>
      </slot>
    </div>
    <!-- Horizontal Line -->
    <div class="relative mb-8">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300" />
      </div>
    </div>
    <!-- BlogPost -->
    <div class="pb-16 px-4 sm:pt-6 sm:px-6">
      <div class="max-w-prose mx-auto lg:pl-8">
        <!-- Intro -->
        <div class="text-lg">
          <slot name="intro">
            <p>no intro content provided</p>
          </slot>
        </div>
        <!-- Content -->
        <div class="text-base">
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
