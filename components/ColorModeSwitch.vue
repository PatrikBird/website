<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button aria-label="Color Mode" class="action-btn w-12 h-12" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'dark'" name="line-md:moon" />
      <Icon v-else name="line-md:sunny-outline-loop" />
    </ColorScheme>
  </button>
</template>
