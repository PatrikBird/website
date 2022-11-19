import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.teal,
        accent: colors.green,
        info: colors.yellow
      }
    }
  }
}
