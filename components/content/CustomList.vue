<script setup lang='ts'>
const props = defineProps<{
  items: string[]
  icon: string
}>()
</script>

<template>
  <ul class="list-none">
    <li
      v-for="item in props.items" :key="item"
      class="flex items-center gap2"
    >
      <span
        :class="props.icon"
        class="w-4 h-4"
      />
      {{ item }}
    </li>
  </ul>
</template>
