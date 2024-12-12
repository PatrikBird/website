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

const isDark = useColorMode().value === 'dark'
const tileColor = computed(() => {
  return isDark === true
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
          <Icon
            name="i-line-md:map-marker-alt-twotone"
            class="text-2.37rem bg-primary/90 dark:bg-secondary/90"
          />
        </LIcon>
        <LPopup>
          <p>{{ marker.description }}</p>
        </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>

<style lang="postcss">
.leaflet-div-icon {
 @apply bg-transparent border-none
}

.leaflet-control-zoom a {
  @apply bg-zinc-100 border-zinc hover:bg-zinc-200 dark:(bg-zinc-500 border-zinc-600 hover:bg-zinc-400)
}

.leaflet-control-zoom.leaflet-bar.leaflet-control {
  @apply border-zinc border-1 rounded-sm dark:border-zinc-600
}

.leaflet-control-attribution.leaflet-control {
  @apply bg-transparent
}
.leaflet-control-attribution.leaflet-control a {
  @apply color-zinc-600 dark:color-zinc-500
}
</style>
