import { defineConfig } from 'unocss'

// Presets
// https://unocss.dev/presets/
import PresetAttributify from '@unocss/preset-attributify'
import PresetIcons from '@unocss/preset-icons'
import PresetTypography from '@unocss/preset-typography'
import PresetUno from '@unocss/preset-uno'
import PresetWebFonts from '@unocss/preset-web-fonts'
import TransformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

// function range(size: number, startAt = 1) {
//   return Array.from(Array(size).keys()).map(i => i + startAt)
// }

export default defineConfig({
  shortcuts: [
    {
      // 'bg-base': 'bg-white dark:bg-black',
      // 'border-base': 'border-[#8884]',
      'underlined-link': 'no-underline relative before:content-empty before:(bg-#e6deff dark:bg-#701AC7 absolute left-0 bottom-3px w-full h-8px z--1 hover:bottom-0 hover:h-full transition-all duration-100 ease-in-out)',
      'action-btn': 'rounded-full border-none bg-zinc-50 hover:bg-zinc-100 dark:(hover:bg-zinc-800 bg-zinc-900) inline-block items-center justify-center cursor-pointer',
    },
    [/^size-(\w+)$/, ([_, num]) => `h-${num} w-${num}`],
  ],
  // safelist: [
  //   range(12).map(i => `size-${i}`).join(' '),
  // ],
  presets: [
    PresetAttributify({
    }),
    PresetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      prefix: 'i-',
      scale: 1,
      warn: true,
    }),
    PresetTypography({
      selectorName: 'prose',
    }),
    PresetUno({
      /* Inherits: @unocss/preset-wind, @unocss/preset-mini */
    }),
    PresetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        mont: 'Montserrat:600,700,800',
      },
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
