<script setup lang='ts'>
useHead({
  title: 'Patrik Bird',
})
</script>

<template>
  <main>
    <h1>Patrik Bird</h1>
    <p>Hey 👋</p>
    <p>
      I am Patrik, a software engineer who's passionate about the web, especially front-end technologies
      and <a
        href="https://openprocessing.org"
        target="_blank"
        rel="noopener noreferrer"
        class="underlined-link"
      >creative coding</a>.
    </p>
    <p>
      I'm currently backpacking in asia.
      You can follow my journey on the
      <NuxtLink to="/travel" class="underlined-link">
        Travel Blog
      </NuxtLink>
      which is, as of now, only written in German.
    </p>
    <p>
      Besides the nerd stuff, I enjoy to climb, hike, travel and do all those things with my partner.
      I also try to live a sustainable life by pursuing a vegan and <i>less</i> waste lifestyle.
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

<style scoped>
h1 {
  view-transition-name: header;
}
</style>

<style>
::view-transition-old(header),
::view-transition-new(header) {
  width: auto;
}
</style>
