<template>
  <!-- <img src="test-resized.webp" alt="yummy food"> -->
  <picture>
    <source
      srcset="/blog/first/test-resized-wide.webp"
      media="(min-width: 640px)"
    >
    <img src="/blog/first/test-resized.webp" alt="yummy food">
  </picture>
</template>
