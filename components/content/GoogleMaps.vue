<script setup lang='ts'>
const props = defineProps<{ centerLat: number, centerLng: number, markersPos: [number, number] }>()

const center = ref({ lat: props.centerLat, lng: props.centerLng })
const markers = ref([
  {
    description: 'whatever',
    id: '1',
    position: {
      lat: 13.7563,
      lng: 100.5018
    }
  }
]
)
</script>

<template>
  <div>
    <GMapMap
      :center="center"
      :zoom="15"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        backgroundColor: '#f1f1f1',
        zoom: 7,
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
    </GMapMap>
  </div>
</template>
