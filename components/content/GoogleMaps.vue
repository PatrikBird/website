<script setup lang='ts'>
interface Props {
  lat: number,
  lng: number,
  pins: number[][],
  zoom: number,
}
const props = withDefaults(defineProps<Props>(), {
  zoom: 6
})

const center = ref({ lat: props.lat, lng: props.lng })

const markers = computed(() => {
  return props.pins.map((pin, index) => {
    return {
      id: index,
      description: pin[2],
      position: {
        lat: pin[0],
        lng: pin[1]
      }
    }
  })
})

const openedMarkerID = ref(null)
function openMarker(id: any) {
  openedMarkerID.value = id
}

const colorMode = useColorMode()
const backgroundColor = computed(() => {
  return colorMode.value === 'dark' ? '#525151' : '#f1f1f1'
})
</script>

<template>
  <div>
    <GMapMap
      :center="center"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        backgroundColor: backgroundColor,
        zoom: zoom,
        minZoom: 4,
        mapTypeId: 'terrain',
      }"
      style="width: 100%; height: 600px; margin: auto"
    >
      <GMapMarker v-for="marker in markers" :key="marker.id" :position="marker.position" />
      <GMapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :clickable="true"
        @click="openMarker(marker.id)"
      >
        <GMapInfoWindow :closeclick="true" :opened="openedMarkerID === marker.id" @closeclick="openMarker(null)">
          <div class="text-black">
            {{ marker.description }}
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>
