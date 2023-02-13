export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('de', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
