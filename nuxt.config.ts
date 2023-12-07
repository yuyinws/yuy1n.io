// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'unplugin-turbo-console/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind.css'
  ],
  content: {
    highlight: {
      theme: 'github-light',
    },
  },

  colorMode: {
    classSuffix: '',
  },
})
