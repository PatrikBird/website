<script setup lang='ts'>
const { prev, next } = useContent()

const hasTwoAdjacentBlogPosts = computed(() => {
  return prev.value && prev.value._path.includes('blog') && next.value && next.value._path.includes('blog')
})
</script>

<template>
  <footer class="py-10">
    <p class="text-center text-2xl font-mont font-bold">
      Weitere Beiträge
    </p>
    <div
      class="rounded-lg sm:grid gap-1 mx-auto"
      :class="{'sm:grid-cols-2': hasTwoAdjacentBlogPosts, 'max-w-lg': !hasTwoAdjacentBlogPosts}"
    >
      <NuxtLink
        v-if="prev && prev._path.includes('blog')"
        :to="prev._path"
        class="no-underline shadow hover:shadow-lg flex flex-col border-primary-500 p-6 text-center sm:border-0 opacity-75 hover:opacity-100"
      >
        <dd class="order-0 leading-6 text-sm">
          {{ prev.date }}
        </dd>
        <dd class="order-1 text-xl font-bold tracking-tight text-secondary-600">
          {{ prev.title }}
        </dd>
        <dd class="order-2 mt-2 leading-6 px-4">
          {{ prev.description }}
        </dd>
      </NuxtLink>
      <NuxtLink
        v-if="next && next._path.includes('blog')"
        :to="next._path"
        class="no-underline shadow hover:shadow-lg flex flex-col py-6 text-center opacity-75 hover:opacity-100"
      >
        <dd class="order-0 leading-6 text-sm">
          {{ next.date }}
        </dd>
        <dd class="order-1 text-xl font-bold tracking-tight text-secondary-600">
          {{ next.title }}
        </dd>
        <dd class="order-2 mt-2 leading-6 px-4">
          {{ next.description }}
        </dd>
      </NuxtLink>
    </div>
  </footer>
</template>
