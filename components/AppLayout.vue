<script setup lang="ts">
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - yuyin` : 'yuyinws'),
})
</script>

<template>
  <main class="max-w-3xl mx-auto min-h-screen px-6 sm:px-8 pb-10 pt-5">
    <AppLoadingBar />
    <AppHeader />
    <div py-5>
      <slot />
    </div>

    <AppFooter />
  </main>
</template>
