<script setup lang="ts">
throw createError({
  statusCode: 404,
  message: `Page not found at location '${useRoute().path}'`,
})
</script>

<template>
  <p>test 123</p>
</template>
