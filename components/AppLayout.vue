<script setup lang="ts">
const route = useRoute()

const { toc, page } = useContent()

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
  <main>
    <TOC v-if="page.toc" :data="toc" />
    <div class="max-w-3xl mx-auto min-h-screen px-6 sm:px-8 pb-10 pt-5">
      <AppLoadingBar />
      <AppHeader />
      <div py-5>
        <slot />
      </div>
    </div>
    <!-- <AppFooter /> -->
  </main>
</template>
