export interface Post {
  date: Date
  description?: string
  imageUrl?: string
  layout: 'travel' | 'articles' | 'default' | 'fullwidth'
  readingTime: ReadingTime
  title: string
  _draft: boolean
  _extension: string | 'md'
  _file: string
  _id: string
  _partial: boolean
  _path: string
  _source: string | 'content'
  _type: string | 'markdown'
  lang: 'en' | 'de' // _locale
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
