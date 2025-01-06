<script setup lang='ts'>
interface RootError {
  statusCode?: number
  statusMessage?: string
  message?: string
}

const { error } = defineProps<{ error: RootError }>()

useDark()
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <div class="max-w-7xl text-center">
      <h1 class="text-8xl my-0">
        {{ error.statusCode }}
      </h1>
      <p>{{ error.statusMessage }}</p>
      <!-- <p class="mt-4 text-base sm:mt-6">
        {{ error.message }}
      </p> -->
      <NuxtLink to="/" class="text-sm">
        <span aria-hidden="true">&larr;</span>
        Back to home
      </NuxtLink>
    </div>
  </main>
</template>

<style lang="postcss">
html {
  @apply dark:bg-#121212 dark:text-white
}
</style>
