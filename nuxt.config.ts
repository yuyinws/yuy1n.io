import { promises as fs } from 'node:fs'
import fg from 'fast-glob'

export default async function () {
  const svgs = await fg.glob('./assets/customIcons/*.svg')

  const icons: Record<string, () => Promise<string>> = {}
  svgs.forEach((svg) => {
    const name = svg.replace('./assets/customIcons/', '').replace('.svg', '')
    icons[name] = () => fs.readFile(svg, 'utf8')
  })

  return defineNuxtConfig({
    devtools: { enabled: true },
    extends: '@nuxt-themes/typography',
    modules: [
      '@nuxt/content',
      'unplugin-turbo-console/nuxt',
      '@unocss/nuxt',
      '@nuxtjs/color-mode',
      '@vueuse/nuxt',
      'nuxt-time',
      [
        'unplugin-icons/nuxt',
        {
          customCollections: {
            custom: icons,
          },
        },
      ],
    ],
    css: [
      '@unocss/reset/tailwind.css',
    ],
    content: {
      highlight: {
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

  })
}
