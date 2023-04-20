<script setup lang="ts">
const colorMode = useColorMode()

function onClick() {
  colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light')
}
</script>

<template>
  <button type="button" aria-label="Switch color mode" class="action-btn h-12 w-12" @click="onClick">
    <ColorScheme>
      <Icon v-if="colorMode.value === 'dark'" name="line-md:sunny-outline-to-moon-loop-transition" />
      <Icon v-else name="line-md:moon-alt-to-sunny-outline-loop-transition" />
    </ColorScheme>
  </button>
</template>
