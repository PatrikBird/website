import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Post extends ParsedContent {
  date: Date
  description?: string
  external?: string
  imageUrl?: string
  readingTime: ReadingTime
  _locale?: 'en' | 'de'
}

export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

export interface SwiperImage {
  src: string
  alt: string
}

export interface GoogleMapsPin {
  lat: number
  lng: number
  desc: string
}
