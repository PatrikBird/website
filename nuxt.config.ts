export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    '@nuxtjs/plausible',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/web-vitals',
    'nuxt-icon',
  ],
  app: {
    head: {
      title: 'Patrik Bird',
      meta: [
        { name: 'description', content: 'Personal website' },
      ],
    },
  },
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
  // image: {
  //   domains: [
  //     'avatars0.githubusercontent.com',
  //   ],
  // },
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
