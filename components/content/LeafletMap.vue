<script setup lang="ts">
import type { MapMarker } from '~/types'

const props = withDefaults(defineProps<{
  lat: number
  lng: number
  markers: MapMarker[]
  zoom: number
}>(), {
  zoom: 6,
})

const center = ref([props.lat, props.lng]) as any

const markers = computed(() => {
  return props.markers.map((markers, index) => {
    return {
      id: index,
      description: markers.desc,
      position: {
        lat: markers.lat,
        lng: markers.lng,
      },
    }
  })
})

const isDark = useDark()
const tileColor = computed(() => {
  return isDark.value === true
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
})
</script>

<template>
  <div style="width: 100%; height: 600px; margin: auto">
    <LMap
      :zoom="props.zoom"
      :center="center"
    >
      <LTileLayer
        :url="tileColor"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker
        v-for="marker in markers" :key="marker.id"
        :lat-lng="marker.position"
      >
        <LIcon :icon-size="[36, 36]">
          <span i-line-md:map-marker-alt-twotone text-2.37rem bg-primary dark:bg-secondary />
        </LIcon>
        <LPopup>
          <p>{{ marker.description }}</p>
        </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>

<style>
.leaflet-div-icon {
  background: transparent;
  border: none;
}
</style>
