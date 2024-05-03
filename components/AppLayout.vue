<script setup lang="ts">
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - yuyin` : 'yuyinws'),
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <main px-6 xl:px-4 pt-4 min-h-screen>
    <AppHeader />
    <div class="max-w-3xl mx-auto">
      <AppLoadingBar />
      <slot />
    </div>
    <!-- <AppFooter /> -->
  </main>
</template>
