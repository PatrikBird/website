export function formatDate(input: Date | string): string {
  let date: Date

  if (typeof input === 'string') {
    const [year, month, day] = input.split('.').map(Number)
    date = new Date(year, month - 1, day) // Months are 0-based in JavaScript
  }
  else if (input instanceof Date) {
    date = input
  }
  else {
    throw new TypeError('Invalid date format')
  }

  const monthsShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]

  const day = date.getDate()
  const month = monthsShort[date.getMonth()]
  const year = date.getFullYear()

  return `${day < 10 ? `0${day}` : day} ${month} ${year}`
}
