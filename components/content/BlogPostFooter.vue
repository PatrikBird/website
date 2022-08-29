<script setup lang='ts'>
const route = useRoute()
const { prev, next } = useContent()
</script>

<template>
  <div class="flex justify-between">
    <NuxtLink v-if="prev && prev._path.includes('blog')" :to="prev._path" class="opacity-75 hover:opacity-100">
      <Icon name="line-md:arrow-left-circle" class="opacity-75 hover:opacity-100" />
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-else
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      title="Zurück zum Blog"
      class="opacity-75 hover:opacity-100"
    >
      Zum Blog
    </NuxtLink>

    <NuxtLink v-if="next" :to="next._path" class="opacity-75 hover:opacity-100">
      {{ next.title }}
      <Icon name="line-md:arrow-right-circle" class="opacity-75 hover:opacity-100" />
    </NuxtLink>
    <NuxtLink
      v-else
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      title="Zurück zum Blog"
      class="opacity-75 hover:opacity-100"
    >
      Zum Blog
    </NuxtLink>
  </div>
</template>
