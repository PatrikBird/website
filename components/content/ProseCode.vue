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
      class="absolute right-0 top-0 px-6 py-5 text-sm op70 font-mono"
    >
      {{ filename }}
    </span>
    <slot />
  </div>
</template>

<style scoped>
/* TODO: highlights will be fixed as soon as nuxt/mdc gets released  */
:slotted(pre code .line.highlight) {
  background-color: hotpink !important;
}
</style>
