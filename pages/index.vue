<script setup lang='ts'>
useHead({
  title: 'Patrik Bird',
})
</script>

<template>
  <main>
    <h1>Patrik Bird</h1>
    <p>Hey 👋</p>
    <!-- <span i-openmoji:desert-island />
    <span i-fluent-emoji-high-contrast:sleeping-face />
    i-emojione-monotone:flag-for-singapore -->
    <p>
      I am Patrik, a software engineer who is fascinated by the web, especially front-end technologies.
      I recently started writing technical
      <NuxtLink to="/articles" class="underlined-link">
        articles
      </NuxtLink> about it.
    </p>
    <p>
      I am currently backpacking in Asia.
      You can follow my journey on the
      <NuxtLink to="/travel" class="underlined-link">
        Travel Blog
      </NuxtLink>, though it is currently only accessible in German.
    </p>
    <p>
      Besides my interests in nerdy things, I like to climb, hike, eat, and share those activities with my partner.
      Additionally, I strive to live an ethical life by following a vegan lifestyle.
    </p>
    <hr>
    You can find me on <a
      href="https://github.com/PatrikBird"
      target="_blank"
      rel="noopener noreferrer"
      class="underlined-link"
    >GitHub</a> and
    <a
      href="https://www.instagram.com/patbirdo"
      target="_blank"
      rel="noopener noreferrer"
      class="underlined-link"
    >Instagram</a> or
    contact me via
    <a
      class="underlined-link"
      href="mailto:&#x0068;&#x0069;&#x0040;&#x0070;&#x0061;&#x0074;&#x0062;&#x0069;&#x0072;&#x0064;&#x002e;&#x006d;&#x0065;"
    >  &#x0068;&#x0069;&#x0040;&#x0070;&#x0061;&#x0074;&#x0062;&#x0069;&#x0072;&#x0064;&#x002e;&#x006d;&#x0065;</a>.
  </main>
</template>

<!-- <style scoped>
h1 {
  view-transition-name: header;
}
</style>

<style>
::view-transition-old(header),
::view-transition-new(header) {
  width: auto;
}
</style> -->
