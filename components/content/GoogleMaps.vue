<script setup lang='ts'>

const props = defineProps<{ lat: number, lng: number }>()
const center = ref({ lat: props.lat, lng: props.lng })

const openedMarkerID = ref(null)
function openMarker(id) {
  openedMarkerID.value = id
}

const markers = ref([
  {
    description: 'Bangkok - 3 Nächte waren hier natürlich zu wenig, wir werden wohl zurück kommen.',
    id: '1',
    position: {
      lat: 13.76,
      lng: 100.5
    }
  },
  {
    description: 'Ayutthaya war leider überflutet als wir dort waren, wir konnten dennoch die meisten Tempelruinen besuchen. Nur einen Katzensprung von Bangkok entfernt!',
    id: '2',
    position: {
      lat: 14.37,
      lng: 100.59
    }
  },
  {
    description: 'Die Stadt Phitsanulok ist eigentlich nichts besonderes und wird oft nur als Zwischenstopp genutzt. Wir hatten dennoch eine schöne Zeit dort.',
    id: '3',
    position: {
      lat: 16.82,
      lng: 100.26
    }
  },
  {
    description: 'Sukhothai beheimatet wohl die schönsten Tempelruinen in ganz Thailand. Der Ramkhamhaeng National Park ist ebenfalls hier. Die Wanderung hatte es in sich!',
    id: '4',
    position: {
      lat: 17,
      lng: 99.83
    }
  },
  {
    description: 'Lampang - eine ruhige Stadt mit sehr wenig Touristen im Norden Thailands. Wir haben uns hier sehr viel ausgeruht.',
    id: '5',
    position: {
      lat: 18.29,
      lng: 99.49
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
        zoom: 6,
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
          <div>{{ marker.description }}</div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>
