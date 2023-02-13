<script setup lang='ts'>
const { prev, next } = useContent()

const hasTwoAdjacentBlogPosts = computed(() => {
  return prev.value && prev.value._path.includes('blog') && next.value && next.value._path.includes('blog')
})
</script>

<template>
  <footer class="py-10">
    <p class="text-center font-mont text-2xl font-bold">
      Weitere Beiträge
    </p>
    <div
      class="mx-auto gap-1 rounded-lg sm:grid"
      :class="{ 'sm:grid-cols-2': hasTwoAdjacentBlogPosts, 'max-w-lg': !hasTwoAdjacentBlogPosts }"
    >
      <NuxtLink
        v-if="prev && prev._path.includes('blog')"
        :to="prev._path"
        class="flex flex-col border-primary-500 p-6 text-center no-underline opacity-75 shadow hover:opacity-100 hover:shadow-lg sm:border-0"
      >
        <dd class="order-0 text-sm leading-6">
          {{ prev.date }}
        </dd>
        <dd class="order-1 text-xl font-bold tracking-tight text-secondary-600">
          {{ prev.title }}
        </dd>
        <dd class="order-2 mt-2 px-4 leading-6">
          {{ prev.description }}
        </dd>
      </NuxtLink>
      <NuxtLink
        v-if="next && next._path.includes('blog')"
        :to="next._path"
        class="flex flex-col py-6 text-center no-underline opacity-75 shadow hover:opacity-100 hover:shadow-lg"
      >
        <dd class="order-0 text-sm leading-6">
          {{ next.date }}
        </dd>
        <dd class="order-1 text-xl font-bold tracking-tight text-secondary-600">
          {{ next.title }}
        </dd>
        <dd class="order-2 mt-2 px-4 leading-6">
          {{ next.description }}
        </dd>
      </NuxtLink>
    </div>
  </footer>
</template>
