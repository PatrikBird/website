<script setup>
const slots = useSlots()

// Hacky check for an image
const isImage = computed(() => {
  return slots.default()[0].type.tag === 'img'
})
</script>

<template>
  <div v-if="isImage">
    <slot />
  </div>
  <p v-else>
    <slot />
  </p>
</template>
