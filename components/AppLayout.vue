<template>
  <div class="dark:text-white">
    <Meta property="og:image" content="/cover.jpg" />
    <!-- <NuxtLoadingIndicator color="#FF0000" /> -->
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
</template>
