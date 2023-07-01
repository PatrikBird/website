<script setup lang='ts'>
const props = defineProps<{ path: string }>()

const { data: posts } = await usePosts(`${props.path}`)

const isTravel = computed(() => {
  return posts.value?.some((post) => {
    return post._dir === 'travel'
  })
})
</script>

<template>
  <TravelPostList v-if="posts && isTravel" :posts="posts" />
  <TechPostList v-if="posts && !isTravel" :posts="posts" />
</template>

<style lang="postcss">
.prose h2 {
  @apply my-4 lg:my-10;
}
</style>
