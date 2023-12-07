// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(
    //   {
    //   cssExtend: {
    //     'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
    //       'text-decoration-line': 'none',
    //     },
    //     'a:has(code)': {
    //       'text-decoration': 'none',
    //     },
    //     'p a, ul a': {
    //       'text-decoration-line': 'none',
    //       'color': 'var(--un-prose-body)',
    //       'border-bottom': '1px solid var(--un-prose-body)',
    //       'font-weight': '600',
    //       'transition': 'border 150ms ease-in',
    //     },
    //     'p a:has(code)': {
    //       border: '0',
    //     },
    //     'p a:has(code):hover': {
    //       border: '0',
    //     },
    //     'p a:hover': {
    //       'color': 'var(--un-prose-links)',
    //       'border-bottom': '1px solid var(--un-prose-links)',
    //     },
    //     'blockquote': {
    //       'border-left-color': '#ecdc5a', // primary
    //     },
    //     'pre': {
    //       margin: 0,
    //       padding: 0,
    //     },
    //     'table': {
    //       margin: 0,
    //     },
    //   },
    // }
    ),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
