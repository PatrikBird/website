export function useCleanString(str: MaybeRef<string>) {
  const _str = toValue(str)
  const cleanString = ref()

  cleanString.value = _str.replace(/[^a-zA-Z0-9]/g, '')
  const metaDesc = computed(() => `${cleanString.value}-meta`)

  return {
    cleanString,
    metaDesc,
  }
}
