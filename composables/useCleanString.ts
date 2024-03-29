export function useCleanString(str: MaybeRef<string>) {
  const _str = toValue(str)
  const cleanString = ref()

  cleanString.value = _str.replace(/[^a-zA-Z0-9]/g, '')
  const metaDesc = computed(() => `${cleanString.value}-meta`)
  const imgID = computed(() => `${cleanString.value}-img`)
  const postDesc = computed(() => `${cleanString.value}-desc`)

  return {
    cleanString,
    metaDesc,
    imgID,
    postDesc,
  }
}
