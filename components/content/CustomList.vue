<script setup lang='ts'>
const props = defineProps<{
  items: string[]
  icon: string
}>()
</script>

<template>
  <ul class="list-none">
    <li v-for="item in props.items" :key="item" class="flex items-center gap2">
      <span i-carbon:information-filled class="w-5 h-5" /> {{ item }}
    </li>
  </ul>
</template>
