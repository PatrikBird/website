export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    '@nuxtjs/plausible',
    '@nuxtjs/robots',
    '@unocss/nuxt',
    'nuxt-time',
  ],
  app: {
    head: {
      title: 'Patrik Bird',
      link: [
        { rel: 'preconnect', href: 'https://res.cloudinary.com' },
        { rel: 'preconnect', href: 'https://api.iconify.design' },
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
  colorMode: {
    classPrefix: '',
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
    highlight: {
      preload: ['js', 'ts', 'json', 'vue'],
      theme: {
        default: 'vitesse-light',
        light: 'vitesse-light',
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
    // viewTransition: true,
    headNext: true,
    // componentIslands: true,
  },
  htmlValidator: {
    logLevel: 'warning',
    failOnError: false,
    options: {
      rules: {
        'attribute-empty-style': 'off',
      },
    },
  },
  image: {
    presets: {
      blogImg: {
        modifiers: {
          format: 'webp',
          width: 600,
        },
      },
    },
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/df5skrrwb/image/upload/v1677729457/',
      modifiers: {
        // dpr: 'auto',
        // quality: 'auto:best',
      },
    },
  },
  build: {
    transpile: [
      '@fawmi/vue-google-maps',
    ],
  },
  runtimeConfig: {
    public: {
      googleMapsApiKey: '', // will be injected in vueGoogleMaps plugin
    },
  },
  css: [
    // '@/assets/css/main.css',
    '@/assets/css/common.sass',
    // '@/assets/fonts/montserrat/stylesheet.css',
    // '@/assets/fonts/cabin/stylesheet.css',
  ],
})
