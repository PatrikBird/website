<script setup lang="ts">
// const props = withDefaults(defineProps<{icon: string}>(), {
//   icon: 'ph:check-circle-duotone'
// })
defineProps({
  icon: {
    type: String,
    default: 'ph:check-circle-duotone',
  },
})

// Utils from Nuxt Content
const { flatUnwrap } = useUnwrap()
</script>

<template>
  <ul class="p-0">
    <li v-for="(item, index) of flatUnwrap($slots.default!(), ['ul'])" :key="index" class="flex space-x-2 pl-0">
      <Icon :name="icon" class="mt-1 h-6 w-6 shrink-0 text-emerald-500" />
      <span><ContentSlot :use="() => item" unwrap="li" /></span>
    </li>
  </ul>
</template>
