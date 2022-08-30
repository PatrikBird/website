import { defineTokens } from '@nuxtjs/design-tokens'

// import { defineTokens, palette } from '@nuxtjs/design-tokens'
// Select a color palette for your theme
// const colors = ['#F8818C', '#6B7FD7', '#DDFBD2', '#E27396'].map(hex => palette(hex))
// Use as `primary: colors[index]`

export default defineTokens({
  colors: {
    // primary: colors[0]
    primary: {
      DEFAULT: { value: '#78716c' },
      50: { value: '#fafaf9' },
      100: { value: '#f5f5f4' },
      200: { value: '#e7e5e4' },
      300: { value: '#d6d3d1' },
      400: { value: '#a8a29e' },
      500: { value: '#78716c' },
      600: { value: '#57534e' },
      700: { value: '#2D2E33' },
      800: { value: '#242529' },
      900: { value: '#1c1917' }
    },
    secondary: {
      DEFAULT: { value: '#FB770B' },
      50: { value: '#FEB172' },
      100: { value: '#FDA55E' },
      200: { value: '#FC9A4A' },
      300: { value: '#FC8F36' },
      400: { value: '#FC8422' },
      500: { value: '#FB770B' },
      600: { value: '#F16F04' },
      700: { value: '#DD6503' },
      800: { value: '#C95C03' },
      900: { value: '#B55303' }
    },
    accent: {
      DEFAULT: { value: '#58CDAF' },
      50: { value: '#B0E8DA' },
      100: { value: '#A1E3D2' },
      200: { value: '#91DECB' },
      300: { value: '#81D9C3' },
      400: { value: '#72D5BC' },
      500: { value: '#58CDAF' },
      600: { value: '#52CBAD' },
      700: { value: '#43C7A6' },
      800: { value: '#38BC9B' },
      900: { value: '#34AD8E' }
    },
    info: {
      DEFAULT: { value: '#FFCE40' },
      50: { value: '#FFEBAD' },
      100: { value: '#FFE699' },
      200: { value: '#FFE085' },
      300: { value: '#FFDB70' },
      400: { value: '#FFD65C' },
      500: { value: '#FFCE40' },
      600: { value: '#FFCC33' },
      700: { value: '#FFC71F' },
      800: { value: '#FFC20A' },
      900: { value: '#F5B800' }
    }
  }
})
