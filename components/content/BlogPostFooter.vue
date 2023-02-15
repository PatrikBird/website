<script setup lang='ts'>
const { prev, next } = useContent()

const hasTwoAdjacentBlogPosts = computed(() => {
  return prev.value && prev.value._path.includes('blog') && next.value && next.value._path.includes('blog')
})
</script>

<template>
  <!-- TODO: refactor this mess -->
  <footer class="py-10">
    <p class="pb-4 text-center font-mont text-2xl font-bold">
      Weitere Beiträge
    </p>
    <div
      class="mx-auto gap-1 rounded-lg sm:grid"
      :class="{ 'lg:grid-cols-2': hasTwoAdjacentBlogPosts, 'max-w-2xl': !hasTwoAdjacentBlogPosts }"
    >
      <div
        v-if="prev && prev._path.includes('blog')"
        class="flex flex-row gap-2 p-1 text-center"
      >
        <NuxtLink :to="prev._path">
          <img
            class="my-0 aspect-video max-w-[10rem] rounded-lg object-cover"
            :src="prev.imageUrl" alt=""
          >
        </NuxtLink>
        <div class="self-center text-start">
          <dd class="text-xs">
            Vorheriger Beitrag
          </dd>
          <dd class="text-xl font-bold tracking-tight text-teal-600">
            <NuxtLink
              :to="prev._path"
            >
              {{ prev.title }}
            </NuxtLink>
          </dd>
          <dd class="text-xs">
            {{ prev.description }}
          </dd>
        </div>
      </div>
      <div
        v-if="next && next._path.includes('blog')"
        class="flex flex-row justify-end gap-2 p-1 text-center"
      >
        <div class="self-center text-end">
          <dd class="text-xs">
            Nächster Beitrag
          </dd>
          <dd class="text-xl font-bold tracking-tight text-teal-600">
            <NuxtLink
              :to="next._path"
            >
              {{ next.title }}
            </NuxtLink>
          </dd>
          <dd class="text-xs">
            {{ next.description }}
          </dd>
        </div>
        <NuxtLink :to="next._path">
          <img
            class="my-0 aspect-video max-w-[10rem] rounded-lg object-cover"
            :src="next.imageUrl" alt=""
          >
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
