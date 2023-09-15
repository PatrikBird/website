<script setup lang="ts">
const colorMode = useColorMode()

function onClick() {
  colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light')
}
</script>

<template>
  <button
    type="button"
    aria-label="Toggle color mode"
    class="action-btn h-12 w-12"
    @click="onClick"
  >
    <span v-if="colorMode.value === 'dark'" i-line-md:moon />
    <span v-else i-line-md:sunny-outline-loop />
  </button>
</template>
