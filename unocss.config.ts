import { defineConfig } from 'unocss'

// Presets
// https://unocss.dev/presets/
import PresetAttributify from '@unocss/preset-attributify'
import PresetIcons from '@unocss/preset-icons'
import PresetTypography from '@unocss/preset-typography'
import PresetUno from '@unocss/preset-uno'
import PresetWebFonts from '@unocss/preset-web-fonts'

// Transformers
// https://unocss.dev/presets/
//   NOTE: Transformers has no page
import TransformerDirectives from '@unocss/transformer-directives'

// import { range } from './code/utils/range'
// interface FontOptions {
//   italic?: boolean
//   weights?: number[]
// }
// const font = (name: string, options?: FontOptions) => {
//   const { italic, weights } = { ...{ italic: true, weights: range(100, 900, { step: 100 }) }, ...options }
//   return { name, italic, weights }
// }

// https://unocss.dev/config/
export default defineConfig({
  shortcuts: [
    {
      // 'bg-base': 'bg-white dark:bg-black',
      // 'border-base': 'border-[#8884]',
      'action-btn': 'rounded-full border-none bg-zinc-200/40 dark:bg-zinc-800/90 inline-block items-center justify-center cursor-pointer',
    },
    // [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],
  ],
  presets: [
    PresetAttributify({
    }),
    PresetIcons({
      prefix: 'i-',
      scale: 1.2,
      warn: true,
    }),
    PresetTypography({
      selectorName: 'prose',
    }),
    PresetUno({
      /* Inherits: @unocss/preset-wind, @unocss/preset-mini */
    }),
    PresetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        mont: 'Montserrat:600,700,800',
      },
    })],
  // rules: [
  //   // PERCENT: Margins
  //   [/^m-block-(\d+)p$/, ([, percent]) => ({ 'margin-block': `${percent}%` })],
  //   [/^m-block-s-(\d+)p$/, ([, percent]) => ({ 'margin-block-start': `${percent}%` })],
  //   [/^m-block-e-(\d+)p$/, ([, percent]) => ({ 'margin-block-end': `${percent}%` })],

  //   [/^m-inline-(\d+)p$/, ([, percent]) => ({ 'margin-inline': `${percent}%` })],
  //   [/^m-inline-s-(\d+)p$/, ([, percent]) => ({ 'margin-inline-start': `${percent}%` })],
  //   [/^m-inline-e-(\d+)p$/, ([, percent]) => ({ 'margin-inline-end': `${percent}%` })],

  //   [/^m-(\d+)p$/, ([, percent]) => ({ margin: `${percent}%` })],

  //   [/^ml-(\d+)p$/, ([, percent]) => ({ 'margin-left': `${percent}%` })],
  //   [/^mr-(\d+)p$/, ([, percent]) => ({ 'margin-right': `${percent}%` })],
  //   [/^mt-(\d+)p$/, ([, percent]) => ({ 'margin-top': `${percent}%` })],
  //   [/^mb-(\d+)p$/, ([, percent]) => ({ 'margin-bottom': `${percent}%` })],
  // ],
  transformers: [
    TransformerDirectives({
    }),
  ],
})
