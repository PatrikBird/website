import type { MarkdownParsedContent } from '@nuxt/content'

export interface Post extends MarkdownParsedContent {
  date: Date
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

// export interface SwiperImage {
//   src: string
//   alt: string
// }

// export interface MapMarker {
//   lat: number
//   lng: number
//   desc: string
// }
