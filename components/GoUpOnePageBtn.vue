<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <NuxtLink
    class="rounded-full border-none bg-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:bg-zinc-900 inline-block items-center justify-center cursor-pointer group flex my-8 hidden w-10 h-10 border-none! lg:absolute lg:-left-10 lg:top-0"
    :to="route.path.split('/').slice(0, -1).join('/') || '/'"
    title="Back to overview"
    aria-label="Go back to overview"
  >
    <Icon
      name="line-md:arrow-small-left"
      class="text-primary w-5 h-5 opacity-75 group-hover:opacity-100 dark:text-secondary"
    />
  </NuxtLink>
</template>
