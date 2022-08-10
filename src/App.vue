<script setup lang="ts">
useHead({
  title: 'YuYinWS',
  meta: [
    { name: 'description', content: 'YuYinWS Blog' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <Navbar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>
