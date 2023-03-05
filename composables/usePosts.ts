import type { Post } from '~/types'

export function usePosts() {
  return useAsyncData('content:post-partials', () => queryContent<Post>('blog/')
    .sort({
      date: -1,
    })
    .find(),
  )
}
