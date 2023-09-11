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
    <div v-if="colorMode.value === 'dark'" i-line-md:moon class="w-5 h-5 m-auto" />
    <div v-else i-line-md:sunny-outline-loop class="w-5 h-5 m-auto" />
  </button>
</template>
