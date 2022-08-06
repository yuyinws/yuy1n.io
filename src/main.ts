import { ViteSSG } from 'vite-ssg'
import autoRoutes from 'pages-generated'
import NProgress from 'nprogress'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition)
    return savedPosition
  else
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ router, isClient }) => {
    if (isClient) {
      router.beforeEach(() => { NProgress.start() })
      router.afterEach(() => { NProgress.done() })
    }
  },
)
