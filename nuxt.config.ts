export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    '@nuxtjs/html-validator',
    '@nuxtjs/plausible',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/web-vitals',
    'nuxt-icon',
  ],
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
  },
  // vite: {
  //   optimizeDeps: {
  //     // vue-google-maps
  //     include: ['fast-deep-equal'],
  //   },
  // },
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-reading-time'],
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'vitesse-dark',
    },
  },
  htmlValidator: {
    logLevel: 'verbose',
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
      cover: {
        modifiers: {
          format: 'webp',
          width: 630,
          height: 290,
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
    transpile: ['tailwindcss/typography', '@fawmi/vue-google-maps'],
  },
  runtimeConfig: {
    public: {
      googleMapsApiKey: '', // will be injected in vueGoogleMaps plugin
    },
  },
  css: ['@/assets/css/main.css', '@/assets/fonts/montserrat/stylesheet.css'],
})
