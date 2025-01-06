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
      class="flex items-center gap-2"
    >
      <span
        class="flex items-center"
      >
        {{ props.icon }}
      </span>
      {{ item }}
    </li>
  </ul>
</template>
