<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <button
    type="button"
    aria-label="Toggle color mode"
    class="rounded-full border-none bg-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:bg-black inline-block items-center justify-center cursor-pointer w-12 h-12"
    @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
  >
    <Icon
      v-if="colorMode.value === 'dark'"
      name="i-line-md:moon"
      class="w-5 h-5"
    />
    <Icon
      v-else
      name="i-line-md:sunny-outline-loop"
      class="w-5 h-5"
    />
  </button>
</template>
