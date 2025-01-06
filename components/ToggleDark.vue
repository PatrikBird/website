<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div
    class="cursor-pointer"
    @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
  >
    <Icon
      v-if="colorMode.value === 'dark'"
      name="i-line-md:moon"
    />
    <Icon
      v-else
      name="i-line-md:sunny-outline-loop"
    />
  </div>
</template>
