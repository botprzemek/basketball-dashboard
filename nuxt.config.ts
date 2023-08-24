// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    public: {
      websiteName: 'Knury Knurów',
      apiBase: process.env.API_BASE
    }
  },
  i18n: {
    locales: [ 'pl', 'en' ],
    customRoutes: 'config',
    pages: {
      contact: {
        pl: '/kontakt',
        en: '/contact'
      },
      index: {
        pl: '/',
        en: '/'
      },
      media: {
        pl: '/media',
        en: '/media'
      },
      news: {
        pl: '/aktualnosci',
        en: '/news'
      },
      team: {
        pl: '/zespol',
        en: '/team'
      },
    },
    defaultLocale: 'pl'
  },
  devtools: {
    enabled: true
  }
})