<script setup lang='ts'>
const route = useRoute()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="flex justify-between">
    <NuxtLink
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      title="Zurück zum Blog"
      class="font-mono no-underline opacity-75 hover:opacity-100"
    >
      Zum Blog
    </NuxtLink>
    <NuxtLink
      class="font-mono no-underline opacity-75 hover:opacity-100 hover:cursor-pointer"
      title="Scroll to top"
      @click="scrollToTop"
    >
      <Icon name="mdi-light:arrow-up-circle" />
    </NuxtLink>
  </div>
</template>
