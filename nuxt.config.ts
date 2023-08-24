// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      apiSecret: process.env.API_SECRET,
      apiBase: process.env.API_BASE
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})