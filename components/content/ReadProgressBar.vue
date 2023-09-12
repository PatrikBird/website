<script setup lang="ts">
const readProgress = ref(0)

function currentScrollPosition(position: number) {
  return (
    (position / (document.body.clientHeight - document.documentElement.clientHeight))
    * 100
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
  <div class="fixed left-0 top-0 z-50 block h-1 w-full bg-transparent">
    <span
      class="block h-1 bg-#e6ccff dark:bg-#481180"
      :style="{ width: `${readProgress}%` }"
    />
  </div>
</template>
