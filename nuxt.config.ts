export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/html-validator',
    '@nuxtjs/plausible',
    '@nuxtjs/robots',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt3-leaflet',
    'nuxt-time',
  ],
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('swiper-'),
        },
      },
    },
  },
  app: {
    head: {
      title: 'Patrik Bird',
      link: [
        { rel: 'preconnect', href: 'https://res.cloudinary.com' },
      ],
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
  image: {
    format: ['avif', 'webp'],
    quality: 90,
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/df5skrrwb/image/upload/v1677729457/',
    },
  },
  fontMetrics: {
    fonts: [
      {
        fallbackName: 'Inter fallback',
        family: 'Inter',
        fallbacks: ['Arial'],
      },
    ],
  },
  css: [
    '@/assets/css/main.sass',
    '@/assets/css/text.sass',
  ],
})
