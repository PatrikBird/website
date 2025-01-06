import PresetAttributify from '@unocss/preset-attributify'

import PresetTypography from '@unocss/preset-typography'
import PresetUno from '@unocss/preset-uno'
import TransformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    PresetAttributify({
    }),
    PresetTypography({
      selectorName: 'prose',
    }),
    PresetUno({
      /* Inherits: @unocss/preset-wind, @unocss/preset-mini */
    }),
  ],
  theme: {
    colors: {
      primary: '#701AC7',
      secondary: '#E6DEFF',
    },
    breakpoints: {
      'xs': '470px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xxl': '1536px',
    },
  },
  transformers: [
    transformerVariantGroup(),
    TransformerDirectives({
    }),
  ],
})
