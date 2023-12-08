import { defineTheme } from 'pinceau'

export default defineTheme({
  prose: {
    img: {
      borderRadius: '{typography.radii.sm}',
    },
    h2: {
      fontSize: '{typography.fontSize.2xl}',
    },
    h3: {
      fontSize: '{typography.fontSize.xl}',
    },
    h4: {
      fontSize: '{typography.fontSize.sm}',
    },
  },
})
