<script setup lang="ts">
const props = defineProps<{ pic: string; alt: string }>()
</script>

<template>
  <figure>
    <nuxt-img :src="pic" :alt="alt">
      <figcaption>
        <slot>
          <p>no caption provided</p>
        </slot>
      </figcaption>
    </nuxt-img>
  </figure>
</template>
