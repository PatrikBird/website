import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt-themes/config/module',
    '@nuxtjs/design-tokens/module',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge'
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
    }
  },
  build: {
    transpile: ['tailwindcss/typography']
  },
  app: {
    // theme: {
    //   meta: {
    //     name: 'Test Name',
    //     author: 'Patrik Bird (@Atinux)',
    //     description: 'A lightweight Nuxt theme to build a Markdown driven website, based on Nuxt Content, TailwindCSS and Iconify ✨'
    //   }
    // }
  },
  css: ['@/assets/css/main.css']
})
