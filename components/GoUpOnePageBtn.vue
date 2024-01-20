<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <NuxtLink
    class="action-btn group flex my-8 hidden size-10 border-none!
    lg:(absolute -left-10 top-0) "
    :to="route.path.split('/').slice(0, -1).join('/') || '/'"
    title="Back to overview"
    aria-label="Go back to overview"
  >
    <span
      i-line-md:arrow-small-left
      class="text-primary size-5 opacity-75 group-hover:opacity-100 dark:text-secondary"
    />
  </NuxtLink>
</template>
