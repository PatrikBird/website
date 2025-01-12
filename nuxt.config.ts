import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    // '@nuxtjs/leaflet',
    // '@nuxtjs/plausible',
    // '@nuxtjs/robots',
    // '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-time',
  ],

  // vite: {
  //   optimizeDeps: {
  //     include: ['leaflet'],
  //   },
  css: [
    '@/assets/css/tw.css',
    '@/assets/css/main.sass',
    '@/assets/css/text.sass',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // vue: {
  //   template: {
  //     compilerOptions: {
  //       isCustomElement: tag => tag.startsWith('swiper-'),
  //     },
  //   },
  // },
  // },
  app: {
    head: {
      title: 'Patrik Bird',
      meta: [
        { name: 'description', content: 'Personal website' },
      ],
      // set lang attributes for fallback pages
      htmlAttrs: {
        lang: 'en',
      },
    },
    pageTransition: false,
    layoutTransition: false,
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
    highlight: {
      preload: ['js', 'ts', 'json', 'vue'],
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  experimental: {
    payloadExtraction: true,
    typedPages: true,
    headNext: true,
    viewTransition: true,
    // componentIslands: true,
  },

  htmlValidator: {
    logLevel: 'warning',
    failOnError: false,
    options: {
      rules: {
        'attribute-empty-style': 'off',
        'element-permitted-content': 'warn',
      },
    },
  },

  icon: {
    size: '1.3em',
  },

  image: {
    format: ['avif'],
  },

  compatibilityDate: '2024-12-13',
})
