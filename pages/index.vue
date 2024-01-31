<script setup lang='ts'>
useHead({
  title: 'Patrik Bird',
})

const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1080/1920?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
]

const currentPath = useRoute().path
const indexContent = await useAsyncData(`content-[${currentPath}]`, () => queryContent(currentPath).findOne())

const currentError = indexContent.error.value
if (currentError)
  throw currentError

const currentParsedContent = indexContent.data.value
if (!currentParsedContent) {
  throw createError({
    statusCode: 404,
    message: `Post not found at location '${currentPath}'`,
  })
}
</script>

<template>
  <main>
    <h1>Patrik Bird</h1>
    <Carousel v-slot="{ item }" :items="items" arrows indicators>
      <img :src="item" width="300" height="400" class="w-full">
    </Carousel>
    <ContentRendererMarkdown :value="currentParsedContent" tag="div" />
  </main>
</template>

<style scoped>
main > h1 {
  view-transition-name: headline;
}
</style>
