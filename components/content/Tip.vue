<script setup lang="ts">
const props = withDefaults(defineProps<{ icon?: string }>(), {
  icon: 'carbon:information',
})
</script>

<template>
  <div class="p-4 font-mono rounded-md bg-blue-50 dark:bg-blue-900/35">
    <div class="flex gap-3 items-center">
      <div class="flex-shrink-0">
        <Icon :name="props.icon" class="w-5 h-5" aria-hidden="true" />
      </div>
      <div class="font-600 text-sm">
        <p class="m-0">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </p>
        <div class="m-0">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>
