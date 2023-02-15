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
      :class="{ 'lg:grid-cols-2': hasTwoAdjacentBlogPosts, 'max-w-2xl': !hasTwoAdjacentBlogPosts }"
    >
      <NuxtLink
        v-if="prev && prev._path.includes('blog')"
        :to="prev._path"
        class="flex flex-row gap-2 border-zinc-500 p-6 text-center no-underline opacity-75 shadow hover:opacity-100 hover:shadow-lg sm:border-0"
      >
        <div>
          <img
            class="my-0 aspect-video max-w-[10rem] rounded-lg object-cover"
            :src="prev.imageUrl" alt=""
          >
        </div>
        <div class="self-center text-start">
          <dd class="text-xs">
            Vorheriger Beitrag
          </dd>
          <dd class="text-xl font-bold tracking-tight text-teal-600">
            {{ prev.title }}
          </dd>
          <dd class="text-xs">
            {{ prev.description }}
          </dd>
        </div>
      </NuxtLink>
      <NuxtLink
        v-if="next && next._path.includes('blog')"
        :to="next._path"
        class="flex flex-row justify-end gap-2 p-6 text-center no-underline opacity-75 shadow hover:opacity-100 hover:shadow-lg"
      >
        <div class="self-center text-end">
          <dd class="text-xs">
            Nächster Beitrag
          </dd>
          <dd class="text-xl font-bold tracking-tight text-teal-600">
            {{ next.title }}
          </dd>
          <dd class="text-xs">
            {{ next.description }}
          </dd>
        </div>
        <div>
          <img
            class="my-0 aspect-video max-w-[10rem] rounded-lg object-cover"
            :src="next.imageUrl" alt=""
          >
        </div>
      </NuxtLink>
    </div>
  </footer>
</template>
