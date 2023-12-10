<script setup lang="ts">
import { useDark } from '@vueuse/core'

const color = useColorMode()

const isDark = useDark()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function sendMessage<T>(message: T) {
  const iframe = document.querySelector('giscus-widget')?.shadowRoot?.querySelector('iframe')
  if (!iframe?.contentWindow)
    return

  iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app')
}

function setTheme() {
  const giscusTheme = isDark.value ? 'dark_dimmed' : 'light'

  sendMessage({
    setConfig: {
      theme: giscusTheme,
    },
  })
}

function toggleDark(event?: MouseEvent) {
  // @ts-expect-error: Transition API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition || !event) {
    isDark.value = !isDark.value
    setTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    setTheme()
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}

onMounted(() => {
  setTheme()
})
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="i-carbon-sun dark:i-carbon-moon" />
  </button>
</template>
