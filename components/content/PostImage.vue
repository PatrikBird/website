<script setup lang="ts">
const props = defineProps<{ pic: string; alt: string }>()
</script>

<template>
  <figure>
    <img :src="pic" :alt="alt" width="600" height="400" />
    <figcaption>
      <slot>
        <p>no caption provided</p>
      </slot>
    </figcaption>
  </figure>
</template>
