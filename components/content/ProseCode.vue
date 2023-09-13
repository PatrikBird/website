<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="relative">
    <span
      v-if="filename"
      class="absolute right-0 top-0 px-4 py-3 text-sm"
    >
      {{ filename }}
    </span>
    <slot />
  </div>
</template>

<style scoped>
:slotted(pre code .line.highlight) {
  background-color: hotpink !important;
}

/* TODO: highlights will be fixed as soon as nuxt/mdc gets released  */

:slotted(pre code .highlight) {
  background-color: hotpink !important;
}
</style>
