export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    '@nuxtjs/plausible',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
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
  },
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },
  // https://content.nuxtjs.org
  content: {
    // documentDriven: true,
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
    viewTransition: true,
    headNext: true,
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
      'tailwindcss/typography',
      '@fawmi/vue-google-maps',
    ],
  },
  runtimeConfig: {
    public: {
      googleMapsApiKey: '', // will be injected in vueGoogleMaps plugin
    },
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/fonts/montserrat/stylesheet.css',
  ],
})
