import type { MaybeRef } from '@vueuse/core'
import type { Post } from '~/types'

export function usePosts(path: MaybeRef<string>) {
  const pathValue = unref(path)
  return useAsyncData('content:post-partials', () => queryContent<Post>(`${pathValue}`)
    .sort({
      date: -1,
    })
    .find(),
  )
}
