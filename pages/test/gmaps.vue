<script setup lang='ts'>
const zoom = ref(6)
const center = ref({ lat: 47.21322, lng: -1.559482 })
</script>

<template>
  <GMapMap
    :center="center"
    :options="{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      zoom,
      minZoom: 4,
    }"
    style="width: 100%; height: 600px; margin: auto"
  />
</template>
