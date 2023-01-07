export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/critters',
    '@nuxtjs/plausible',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine'
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'vitesse-dark'
    }
  },
  googleFonts: {
    download: true,
    families: {
      Poppins: true,
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  },
  fontMetrics: { fonts: ['Poppins'] },
  build: {
    transpile: ['tailwindcss/typography', '@fawmi/vue-google-maps']
  },
  runtimeConfig: {
    public: {
      googleMapsApiKey: '' // will be injected in vueGoogleMaps plugin
    }
  },
  css: ['@/assets/css/main.css']
})
