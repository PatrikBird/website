import type { ParsedContent as DefaultParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ParsedContent extends DefaultParsedContent {
  prose?: boolean
  schemaOrg: Record<string, any>
}

export interface Post extends ParsedContent {
  description: string
  imageUrl: string
  layout: 'post' | 'default' | 'fullwidth'
  publishedAt: Date
  modifiedAt: Date
  path: string
  // renderer: 'post' | 'page'
  date: Date
  readingTime: ReadingTime
  icon?: string
  nav?: boolean
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
