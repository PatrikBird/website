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
    <Icon
      v-if="isDark"
      name="i-line-md:moon"
      class="size-5 "
    />
    <Icon
      v-else
      name="i-line-md:sunny-outline-loop"
      class="size-5 "
    />
  </button>
</template>
