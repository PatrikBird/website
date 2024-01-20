<script setup lang='ts'>
useHead({
  title: 'Patrik Bird',
})

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
    <ContentRendererMarkdown :value="currentParsedContent" tag="div" />
  </main>
</template>

<style scoped>
main > h1 {
  view-transition-name: headline;
}
</style>
