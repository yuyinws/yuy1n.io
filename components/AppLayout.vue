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
  <main py-5>
    <div px-5>
      <AppHeader />
    </div>
    <div class="max-w-3xl mx-auto min-h-screen px-6 sm:px-8">
      <AppLoadingBar />
      <slot />
    </div>
    <!-- <AppFooter /> -->
  </main>
</template>
