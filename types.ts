import type { ParsedContent as DefaultParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ParsedContent extends DefaultParsedContent {
  prose?: boolean
  schemaOrg: Record<string, any>
}

export interface Post extends ParsedContent {
  readingMins: number
  description: string
  publishedAt: Date
  modifiedAt: Date
  path: string
  renderer: 'post' | 'page'
  icon?: string
  nav?: boolean
}
