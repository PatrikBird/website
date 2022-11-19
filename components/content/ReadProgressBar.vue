<script setup lang="ts">
const readProgress = ref(0)

function currentScrollPosition(position: number) {
  return (
    (position / (document.body.clientHeight - document.documentElement.clientHeight)) *
    100
  )
}

function updateReadProgress() {
  readProgress.value = currentScrollPosition(window.scrollY)
}

onMounted(() => {
  window.addEventListener('scroll', updateReadProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateReadProgress)
})
</script>

<template>
  <div class="read-progress-container">
    <span
      class="read-progress-bar with-shadow"
      :style="{ width: readProgress + '%' }"
    />
  </div>
</template>

<style scoped>
.read-progress-container {
  width: 100%;
  background-color: transparent;
  position: fixed;
  display: block;
  z-index: 50;
  top: 0;
  left: 0;
  height: 3px;
}
.read-progress-container .read-progress-bar {
  display: block;
  width: 0%;
  height: inherit;
  /* background: repeating-linear-gradient(to right, #00dc82 0%, #34cdfe 50%, #0047e1 100%); */
}
/* .read-progress-container .read-progress-bar.with-shadow {
  box-shadow: 0 0 4px 0 rgba(0, 255, 102, 1);
} */
</style>
