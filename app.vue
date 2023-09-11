<template>
  <div class="app font-sans">
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
