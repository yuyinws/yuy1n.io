import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'yuyinws',
    },
  },
  site: {
    url: 'https://yuy1n.io',
  },
  ogImage: {
    googleFontMirror: true,
    fonts: [
      {
        name: 'noto',
        weight: '600',
        path: '/fonts/NotoSans.ttf',
      },
    ],
  },
  runtimeConfig: {
    public: {
      domain: 'https://yuy1n.io',
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  appConfig: {
    umami: {
      customEndpoint: '/api/send',
    },
  },
  extends: ['@nuxt-themes/typography', 'nuxt-umami'],
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-time',
    '@nuxtjs/seo',
    [
      'unplugin-icons/nuxt',
      {
        customCollections: {
          custom: FileSystemIconLoader(
            'assets/icons',
            svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
        },
      },
    ],
    'unplugin-turbo-console/nuxt',
  ],
  css: [
    'assets/style/main.css',
  ],
  content: {
    documentDriven: true,
    highlight: {
      preload: ['ini'],
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  colorMode: {
    classSuffix: '',
  },
  routeRules: {
    '/articles/**': { prerender: true },
    '/': { prerender: true },
    '/articles': { prerender: true },
    '/__og-image__/**': {
      prerender: true,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
})
