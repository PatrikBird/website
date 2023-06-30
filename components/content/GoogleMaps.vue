<script setup lang='ts'>
import type { GoogleMapsPin } from '~/types'

const props = withDefaults(defineProps<{
  lat: number
  lng: number
  pins: GoogleMapsPin[]
  zoom: number
}>(), {
  zoom: 6,
})

const center = ref({ lat: props.lat, lng: props.lng })

const markers = computed(() => {
  return props.pins.map((pin, index) => {
    return {
      id: index,
      description: pin.desc,
      position: {
        lat: pin.lat,
        lng: pin.lng,
      },
    }
  })
})

const openedMarkerID = ref(null)
function openMarker(id: any) {
  openedMarkerID.value = id
}

const colorMode = useColorMode()
const backgroundColor = computed(() => {
  return colorMode.value === 'dark' ? '#18181b' : '#fafafa'
})
</script>

<template>
  <div class="border border-zinc-200 dark:border-zinc-600">
    <GMapMap
      :center="center"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        backgroundColor,
        zoom,
        minZoom: 4,
        mapTypeId: 'terrain',
      }"
      style="width: 100%; height: 600px; margin: auto"
    >
      <GMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :position="marker.position"
      />
      <GMapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :clickable="true"
        @click="openMarker(marker.id)"
      >
        <GMapInfoWindow
          :closeclick="true"
          :opened="openedMarkerID === marker.id"
          @closeclick="openMarker(null)"
        >
          <div class="text-black">
            {{ marker.description }}
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>
