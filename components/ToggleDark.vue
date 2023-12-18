<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    type="button"
    aria-label="Toggle color mode"
    class="action-btn size-12"
    @click="toggleDark()"
  >
    <span
      i-line-md:sunny-outline-loop dark:i-line-md:moon
      class="size-5 dark:size-5"
    />
  </button>
</template>
