// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: undefined,
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'Knury Knurów',
      short_name: 'Knury',
      description: 'Strona drużyny koszykarskiej Knury Knurów. Inicjatywa wytrwałej młodzieży z ambicjami. Nasza społeczność wciąż się rozrasta, co pozwala nam cieszyć się z gry na boisku i poza nim.',
      background_color: '#1d1d1d',
      lang: 'pl'
    },
    meta: {
      'apple-mobile-web-app-capable': true,
      theme_color: '#1d1d1d',
      lang: 'pl',
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        },
        {
          name: 'description',
          content: 'Strona drużyny koszykarskiej Knury Knurów. Inicjatywa wytrwałej młodzieży z ambicjami. Nasza społeczność wciąż się rozrasta, co pozwala nam cieszyć się z gry na boisku i poza nim.'
        },
        {
          name: 'author',
          content: 'botprzemek.pl'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'theme-color',
          content: 'currentColor'
        },
        {
          name: 'color-scheme',
          content: 'dark'
        }
      ],
      script: [
        {
          type: 'module',
          src: 'https://unpkg.com/@splinetool/viewer@0.9.428/build/spline-viewer.js'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'favicon/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/favicon/favicon-16x16.png'
        }
      ]
    }
  },
  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    public: {
      websiteName: process.env.APP_NAME,
      apiBase: process.env.API_BASE
    }
  },
  i18n: {
    locales: [
      {
        code: 'pl',
        name: 'Polski'
      },
      {
        code: 'en',
        name: 'English'
      }
    ],
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
  }
})