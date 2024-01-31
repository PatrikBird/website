export function useCarouselScroll(el: Ref<HTMLElement>) {
  const x = ref<number>(0)

  function onMouseDown(e: MouseEvent) {
    el.value.style.scrollSnapType = 'none'
    el.value.style.scrollBehavior = 'auto'

    x.value = e.pageX

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  function onMouseUp() {
    el.value.style.removeProperty('scroll-behavior')
    el.value.style.removeProperty('scroll-snap-type')

    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }

  function onMouseMove(e: MouseEvent) {
    e.preventDefault()

    const delta = e.pageX - x.value

    x.value = e.pageX

    el.value.scrollBy(-delta, 0)
  }

  onMounted(() => {
    if (!el.value)
      return

    el.value.addEventListener('mousedown', onMouseDown)
  })

  onUnmounted(() => {
    if (!el.value)
      return

    el.value.removeEventListener('mousedown', onMouseDown)
  })
}
