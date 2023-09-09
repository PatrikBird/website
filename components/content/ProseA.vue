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
    class="after:content-empty after:transition-border-color relative inline-block cursor-pointer
    no-underline outline-none after:mx-[-0.25em] after:my-[-0.5em] after:block after:border-b-[0.5em]
    after:border-current after:opacity-10 after:transition-opacity after:duration-300 hover:after:opacity-20
    focus:after:opacity-20 active:after:opacity-20"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
