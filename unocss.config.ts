import { defineConfig } from 'unocss'

// Presets
// https://unocss.dev/presets/
import PresetAttributify from '@unocss/preset-attributify'
import PresetIcons from '@unocss/preset-icons'
import PresetTypography from '@unocss/preset-typography'
import PresetUno from '@unocss/preset-uno'
import PresetWebFonts from '@unocss/preset-web-fonts'
import TransformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: [
    {
      // 'bg-base': 'bg-white dark:bg-black',
      // 'border-base': 'border-[#8884]',
      'underlined-link':
        'no-underline relative before:content-empty before:bg-#e6deff before:dark:bg-#481180 before:absolute before:left-0 before:bottom-3px before:w-full before:h-8px before:z--1 before:hover:bottom-0 before:hover:h-full before:transition-all before:duration-100 before:ease-in-out',
      'action-btn': 'rounded-full border-none bg-zinc-200/40 dark:bg-zinc-800/90 inline-block items-center justify-center cursor-pointer',
    },
    // [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],
  ],
  presets: [
    PresetAttributify({
    }),
    PresetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      prefix: 'i-',
      scale: 1.5,
      warn: true,
    }),
    PresetTypography({
      selectorName: 'prose',
    }),
    PresetUno({
      /* Inherits: @unocss/preset-wind, @unocss/preset-mini */
    }),
    PresetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        mont: 'Montserrat:600,700,800',
      },
    })],
  theme: {
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
    TransformerDirectives({
    }),
  ],
})
