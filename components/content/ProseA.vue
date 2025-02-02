<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
a {
  border-bottom: 1.5px solid rgba(125, 125, 125, 0.7);
  transition: border 0.2s ease-in-out;
}

a:hover {
  border-bottom: 1.7px solid var(--fg);
}
</style>
