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
      class="absolute right-0 top-0 px-3 py-3 text-xs opacity-70 font-mono"
    >
      {{ filename }}
    </span>
    <slot />
  </div>
</template>

<style scoped lang="postcss">
:slotted(pre) {
  @apply bg-zinc-50 dark:bg-zinc-900
}
:slotted(pre code span.line.highlight) {
  @apply bg-#f6edff dark:bg-#280050
}
</style>
