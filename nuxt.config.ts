// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {},
  $development: {
    routeRules: {
      '/dev': {
        ssr: false
      }
    }
  },
  devtools: {
    enabled: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-simple-sitemap'
  ],
  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    public: {
      websiteName: process.env.APP_NAME,
      apiBase: process.env.API_BASE,
      websocketBase: process.env.WEBSOCKET_BASE,
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Knury Knurów',
      short_name: 'Knury',
      description: 'Strona drużyny koszykarskiej Knury Knurów. Inicjatywa wytrwałej młodzieży z ambicjami. Nasza społeczność wciąż się rozrasta, co pozwala nam cieszyć się z gry na boisku i poza nim.',
      lang: 'pl',
      display: 'standalone',
      background_color: '#1d1d1d',
      theme_color: '#f23535',
      icons: [
        {
          src: '/favicon/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/favicon/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/favicon/favicon-512x512-maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    },
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    }
  },
  app: {
    rootId: 'app',
    rootTag: 'main',
    head: {
      htmlAttrs: {
        lang: 'pl'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
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
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }
      ],
      link: [
        {
          rel: 'theme-color',
          color: '#1d1d1d'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon/favicon.ico'
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
  i18n: {
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'pl',
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
      about: {
        pl: '/o-nas',
        en: '/about'
      },
      'admin/login': {
        pl: '/panel/logowanie',
        en: '/admin/login'
      },
      'admin/match': {
        pl: '/panel/mecz',
        en: '/admin/match'
      },
      'admin/verify': {
        pl: '/panel/weryfikacja',
        en: '/admin/verify'
      },
      contact: {
        pl: '/kontakt',
        en: '/contact'
      },
      index: {
        pl: '/',
        en: '/'
      },
      match: {
        pl: '/mecz',
        en: '/match'
      },
      media: {
        pl: '/media',
        en: '/media'
      },
      merch: {
        pl: '/merch',
        en: '/merch'
      },
      news: {
        pl: '/aktualnosci',
        en: '/news'
      },
      partnership: {
        pl: '/partnerstwo',
        en: '/partnership'
      },
      schedule: {
        pl: '/terminarz',
        en: '/schedule'
      },
      sitemap: {
        pl: '/mapa',
        en: '/sitemap'
      },
      support: {
        pl: '/wsparcie',
        en: '/support'
      },
      team: {
        pl: '/zespol',
        en: '/team'
      },
    },
  }
});