<script setup lang="ts">
import { ref } from 'vue'
import 'lazysizes'
import Carousel from './Carousel.vue'
import Thumbnail from './Thumbnail.vue'

import 'swiper/css'

const lightbox = ref(false)
const slide = ref(0)
const thumbs = ref(null)
</script>

<template>
  <div>
    <div class="grid">
      <div v-for="n in 20" :key="n" class="gridItem" @click="lightbox = true; slide = Number(n) - 1">
        <img :data-src="'https://picsum.photos/id/'+n+'/640/480'" class="lazyload">
      </div>
    </div>
    <teleport to="body">
      <div v-show="lightbox" class="lightBox">
        <div class="lightBoxDialog">
          <div class="lightBoxContent">
            <div class="lightBoxHeader">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  class="bi bi-cloud-arrow-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                </svg>
              </span>
              <span class="lightBoxClose" @click.stop="lightbox = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" stroke-width="2" stroke="currentColor" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                  <path fill-rule="evenodd" stroke-width="2" stroke="currentColor" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
              </span>
            </div>
            <div class="lightBoxBody">
              <Carousel :current-slide="slide" :thumbs="thumbs" />
            </div>
            <div class="lightBoxFooter">
              <Thumbnail v-model:current-slide="slide" @thumbs="thumbs" />
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
/* The grid/column system */
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-auto-rows: max-content;
  grid-auto-flow: dense;
  gap: 10px;
}

.gridItem {
  width: auto;
}

.gridItem img {
  width: 100%;
  height: 100%;
  min-height: 180px;
  object-fit: cover;
  background-color: rgba(0, 0, 0, .375);
  cursor: pointer;
}

/* The lightbox dialog */
.lightBox {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .9);
}

.lightBoxDialog {
  position: relative;
  z-index: 101;
  margin: auto;
  padding: 0;
  width: inherit;
  height: inherit;
}

.lightBoxContent {
  position: relative;
  z-index: 102;
  overflow: auto;
  width: inherit;
  height: inherit;
}

.lightBoxHeader {
  padding: 10px;
  width: calc(100vw - 30px);
  position: absolute;
  z-index: 104;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
}

.lightBoxBody {
  position: relative;
  z-index: 103;
}

.lightBoxFooter {
  padding: 10px;
  width: calc(100vw - 30px);
  position: absolute;
  z-index: 104;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
}

/* The Close Button */
.lightBoxClose {
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.lightBoxClose svg,
.lightBoxClose i,
.lightBoxClose img {
  pointer-events: none;
}

.lightBoxClose:hover,
.lightBoxClose:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}
</style>
