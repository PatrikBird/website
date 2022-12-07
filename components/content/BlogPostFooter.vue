<script setup lang='ts'>
const { prev, next } = useContent()

const hasTwoAdjacentBlogPosts = computed(() => {
  return prev.value && prev.value._path.includes('blog') && next.value && next.value._path.includes('blog')
})
</script>

<template>
  <footer class="py-12">
    <p class="text-center text-2xl">
      Weitere Beiträge
    </p>
    <div
      class="rounded-lg shadow-lg sm:grid"
      :class="{'sm:grid-cols-2': hasTwoAdjacentBlogPosts}"
    >
      <NuxtLink
        v-if="prev && prev._path.includes('blog')"
        :to="prev._path"
        class="no-underline flex flex-col border-primary-500 p-6 text-center sm:border-0 opacity-75 hover:opacity-100"
        :class="{'sm:border-r': hasTwoAdjacentBlogPosts, 'border-b': hasTwoAdjacentBlogPosts}"
      >
        <dd class="order-0 leading-6 text-sm">
          {{ prev.date }}
        </dd>
        <dd class="order-1 text-3xl font-bold tracking-tight text-secondary-600">
          {{ prev.title }}
        </dd>
        <dd class="order-2 mt-2 font-medium leading-6">
          {{ prev.description }}
        </dd>
      </NuxtLink>
      <NuxtLink
        v-if="next && next._path.includes('blog')"
        :to="next._path"
        class="no-underline flex flex-col py-6 text-center opacity-75 hover:opacity-100"
      >
        <dd class="order-0 leading-6 text-sm">
          {{ next.date }}
        </dd>
        <dd class="order-1 text-3xl font-bold tracking-tight text-secondary-600">
          {{ next.title }}
        </dd>
        <dd class="order-2 mt-2 font-medium leading-6">
          {{ next.description }}
        </dd>
      </NuxtLink>
    </div>
  </footer>
</template>
