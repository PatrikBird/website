import { $dt } from '@nuxtjs/design-tokens'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        primary: $dt('colors.primary'),
        secondary: $dt('colors.secondary'),
        accent: $dt('colors.accent'),
        info: $dt('colors.info')
      }
    }
  }
}
