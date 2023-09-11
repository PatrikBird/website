<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <NuxtLink
    class="action-btn group mb-8 flex h-10 w-10 lg:absolute lg:-left-10"
    :to="route.path.split('/').slice(0, -1).join('/') || '/'"
    title="Back to overview"
    aria-label="Go back to overview"
  >
    <Icon
      name="line-md:arrow-small-left"
      class="text-teal-800 opacity-75 group-hover:opacity-100 dark:text-zinc-100"
    />
  </NuxtLink>
</template>
