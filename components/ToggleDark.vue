<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <button
    type="button"
    aria-label="Toggle color mode"
    class="action-btn size-12"
    @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
  >
    <Icon
      v-if="colorMode.value === 'dark'"
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
