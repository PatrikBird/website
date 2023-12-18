<script setup lang='ts'>
const props = defineProps<{
  items: string[]
  icon: string
}>()

const iconIsEmoji = computed(() => {
  // https://unicode.org/Public/emoji/13.1/emoji-sequences.txt
  const regex = /[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F1E0}-\u{1F1FF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu
  return regex.test(props.icon)
})

const iconWithPrefix = computed(() => {
  if (props.icon.startsWith('i-'))
    return props.icon

  return `i-${props.icon}`
})
</script>

<template>
  <ul class="list-none">
    <li
      v-for="item in props.items" :key="item"
      class="flex items-center gap2"
    >
      <span
        :class="iconWithPrefix"
        class="flex items-center"
      >
        <template v-if="iconIsEmoji">
          {{ props.icon }}
        </template>
      </span>
      {{ item }}
    </li>
  </ul>
</template>
