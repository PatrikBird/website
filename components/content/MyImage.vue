<template>
  <!-- <img src="test-resized.webp" alt="yummy food"> -->
  <picture>
    <source
      srcset="first/test-resized-wide.webp"
      media="(min-width: 800px)"
    >
    <img src="first/test-resized.webp" alt="yummy food">
  </picture>
</template>
