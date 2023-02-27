export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/critters',
    '@nuxtjs/plausible',
    '@nuxtjs/web-vitals',
    '@nuxt/devtools',
    '@nuxtjs/robots',
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
