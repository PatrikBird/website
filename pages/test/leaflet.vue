<script setup>
const zoom = ref(6)
</script>

<template>
  <div style="width: 100%; height: 600px; margin: auto">
    <LMap
      :zoom="zoom"
      :center="[47.21322, -1.559482]"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>
