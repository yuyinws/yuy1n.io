<script setup lang="ts">
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - yuyin` : 'yuyinws'),
  bodyAttrs: {
    class: 'font-sans',
  },
})
</script>

<template>
  <div class="max-w-3xl mx-auto min-h-screen px-6 sm:px-8 pb-10 pt-5">
    <Header />
    <NuxtPage />
  </div>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;

}
</style>
