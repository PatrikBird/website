<script setup lang='ts'>
useHead({
  title: 'Patrik Bird',
})

// TODO: how to handle different image sizes?
// TODO: how to lazy load images?
const items = [
  { src: '/travel/longtime/wimtarq1hinsia8mc95p.jpg', alt: 'Spazieren im Nationalpark' },
  { src: '/travel/longtime/ohayfldn3rzgakkhueyl.jpg', alt: 'Baum?!' },
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
