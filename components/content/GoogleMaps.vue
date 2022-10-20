<script setup lang='ts'>

const props = defineProps<{ lat: number, lng: number }>()

const center = ref({ lat: props.lat, lng: props.lng })
const marker = {
  id: 'nbg',
  position: {
    lat: props.lat, lng: props.lng
  }
}
// const markers = ref({
//   markers: [
//     {
//       description: "Google France",
//       id: "1",
//       position: {
//         lat: 48.8773406,
//         lng: 2.327774,
//       },
//     },
//   ]
// });
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
      <GMapMarker :key="marker.id" :position="marker.position" />
      <!-- <GMapMarker :key="index" v-for="(marker, index) in markers" :position="marker.position" :clickable="true"
        :draggable="true" @click="openMarker(marker.id)">
        <GMapInfoWindow :closeclick="true" @closeclick="openMarker(null)" :opened="openedMarkerID === marker.id">
          <div>{{ marker.description }}</div>
        </GMapInfoWindow>
      </GMapMarker> -->
    </GMapMap>
  </div>
</template>
