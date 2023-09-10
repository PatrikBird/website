<template>
  <div class="app">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <!-- <NuxtLoadingIndicator color="#FF0000" /> -->
    <AppLoadingBar />
    <AppNavbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<!-- <style>
::view-transition-old(root) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out;
}

::view-transition-old(root) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in;
}
</style> -->

<style>
::view-transition-old(header),
::view-transition-new(header) {
  width: auto;
}
</style>
