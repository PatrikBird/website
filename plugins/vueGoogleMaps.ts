import VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin((nuxtApp: any) => {
  const apiKey = useRuntimeConfig().public.googleMapsApiKey
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: apiKey,
    },
  })
})
