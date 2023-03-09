<script setup lang="ts">
const props = defineProps<{ pic: string; alt: string }>()
</script>

<template>
  <figure>
    <img
      :src="props.pic"
      :alt="props.alt"
      loading="lazy"
      width="800"
      height="400"
    >
    <figcaption>
      <slot>
        <span>{{ props.alt }}</span>
      </slot>
    </figcaption>
  </figure>
</template>
