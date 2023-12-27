<script setup lang="ts">
const props = withDefaults(defineProps<{ icon?: string }>(), {
  icon: 'i-carbon:information',
})
</script>

<template>
  <div class="p-4 rounded-md bg-blue-50 dark:bg-blue-900/35">
    <div class="flex gap3 items-center">
      <div class="flex-shrink-0">
        <span
          :class="props.icon"
          class="w-5 h-5"
          aria-hidden="true"
        />
      </div>
      <div>
        <p class="m-0 text-lg">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </p>
        <div class="text-sm">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>
