<template>
  <div class="app font-sans">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.webp" />
    <!-- <AppLoadingBar /> -->
    <NuxtLoadingIndicator color="red" />
    <AppNavbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
