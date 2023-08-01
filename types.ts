import type { ParsedContent as DefaultParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ParsedContent extends DefaultParsedContent {
  prose?: boolean
  schemaOrg: Record<string, any>
}

export interface Post extends ParsedContent {
  imageUrl?: string
  description: string
  layout: 'travel' | 'articles' | 'default' | 'fullwidth'
  path: string
  date: Date
  readingTime: ReadingTime
  lang: 'en' | 'de'
}

interface ReadingTime {
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
