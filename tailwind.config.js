const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.zinc,
        secondary: colors.teal,
        accent: colors.green,
        info: colors.yellow,
      },
    },
  },
}
