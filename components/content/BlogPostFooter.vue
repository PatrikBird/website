<script setup lang='ts'>
const { prev, next } = useContent()

const hasTwoAdjacentBlogPosts = computed(() => {
  return prev.value && prev.value._path.includes('blog/') && next.value && next.value._path.includes('blog/')
})
</script>

<template>
  <!-- TODO: refactor this mess -->
  <footer class="py-10">
    <p class="pb-4 text-center font-mont text-2xl font-bold">
      Weitere Beiträge
    </p>
    <div
      class="flex flex-col gap-5 rounded-lg sm:grid"
      :class="{ 'lg:grid-cols-2': hasTwoAdjacentBlogPosts, 'max-w-2xl': !hasTwoAdjacentBlogPosts }"
    >
      <div
        v-if="prev && prev._path.includes('blog/')"
        class="flex flex-row gap-2 p-1 text-center"
      >
        <NuxtLink
          :to="prev._path"
          aria-hidden="true"
        >
          <img
            class="my-0 aspect-video max-w-[10rem] rounded-lg object-cover"
            :src="prev.imageUrl"
          >
        </NuxtLink>
        <dl class="self-center text-start">
          <dt class="text-xs">
            Vorheriger Beitrag
          </dt>
          <dd class="text-xl font-bold tracking-tight text-teal-600">
            <NuxtLink
              :to="prev._path"
              aria-label="Go to previous post"
            >
              {{ prev.title }}
            </NuxtLink>
          </dd>
          <dd class="text-xs">
            {{ prev.description }}
          </dd>
        </dl>
      </div>
      <div
        v-if="next && next._path.includes('blog/')"
        class="flex flex-row justify-end gap-2 p-1 text-center"
      >
        <dl class="self-center text-end">
          <dt class="text-xs">
            Nächster Beitrag
          </dt>
          <dd class="text-xl font-bold tracking-tight text-teal-600">
            <NuxtLink
              :to="next._path"
              aria-label="Go to next post"
            >
              {{ next.title }}
            </NuxtLink>
          </dd>
          <dd class="text-xs">
            {{ next.description }}
          </dd>
        </dl>
        <NuxtLink
          :to="next._path"
          aria-hidden="true"
        >
          <img
            class="my-0 aspect-video max-w-[10rem] rounded-lg object-cover"
            :src="next.imageUrl"
          >
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
