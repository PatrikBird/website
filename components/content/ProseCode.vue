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

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
