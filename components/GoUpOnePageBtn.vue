<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <NuxtLink
    class="action-btn group mb-8 flex h-10 w-10 lg:absolute lg:-left-10"
    :to="route.path.split('/').slice(0, -1).join('/') || '/'"
    title="Back to blog"
    aria-label="Go back to blog"
  >
    <Icon
      name="line-md:arrow-small-left"
      class="text-teal-800 opacity-75 group-hover:opacity-100 dark:text-gray-100"
    />
  </NuxtLink>
</template>
