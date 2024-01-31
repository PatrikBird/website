<script setup lang='ts'>
useHead({
  title: 'Patrik Bird',
})

// TODO: how to handle different image sizes?
// TODO: fix mobile styles
const items = [
  { src: 'https://picsum.photos/1920/1080?random=1', alt: 'Image 1' },
  { src: 'https://picsum.photos/1920/1080?random=2', alt: 'Image 2 has a very long caption though and possibly blocks something' },
  { src: 'https://picsum.photos/1920/1080?random=3', alt: 'Image 3' },
  { src: 'https://picsum.photos/1920/1080?random=4', alt: 'Image 4' },
  { src: 'https://picsum.photos/1920/1080?random=5', alt: 'Image 5' },
  { src: 'https://picsum.photos/1920/1080?random=6', alt: 'Image 6' },
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
    <Carousel :images="items" indicators />
    <ContentRendererMarkdown :value="currentParsedContent" tag="div" />
  </main>
</template>

<style scoped>
main > h1 {
  view-transition-name: headline;
}
</style>
