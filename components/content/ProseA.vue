<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})

const isInternal = computed(() => props.href && props.href.includes('patbird.me'))
</script>

<template>
  <NuxtLink
    v-if="isInternal"
    :to="props.href" class="underlined-link" :target="props.target"
  >
    <slot />
  </NuxtLink>
  <a
    v-else
    :href="props.href" class="underlined-link" target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>
