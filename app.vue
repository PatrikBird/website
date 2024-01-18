<template>
  <div class="app font-sans">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.webp" />
    <NuxtLoadingIndicator color="text-primary" />
    <AppNavbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
