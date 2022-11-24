<script setup lang='ts'>
const { prev, next } = useContent()
</script>

<template>
  <footer>
    <div class="relative mb-8">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300" />
      </div>
    </div>
    <div class="flex flex-col justify-center pt-5 sm:flex-row sm:justify-between gap-3">
      <NuxtLink
        v-if="prev && prev._path.includes('blog')"
        :to="prev._path"
        class="m-auto sm:m-0 truncate no-underline opacity-75 hover:opacity-100"
      >
        <Icon name="line-md:arrow-small-left" class="opacity-75 hover:opacity-100" />
        {{ prev.title }}
      </NuxtLink>
      <div v-else />

      <NuxtLink v-if="next" :to="next._path" class="m-auto sm:m-0 truncate no-underline opacity-75 hover:opacity-100">
        {{ next.title }}
        <Icon name="line-md:arrow-small-left" class="rotate-180 opacity-75 hover:opacity-100" />
      </NuxtLink>
      <div v-else />
    </div>
  </footer>
</template>
