<script setup lang="ts">
definePageMeta({
  name: 'Home',
})

useHead({
  title: 'yuyin',
})
</script>

<template>
  <section class="mb-4">
    <h1
      class="font-bold text-4xl md:text-5xl py-6 overflow-hidden"
    >
      Hi👋
      <br>
      I'm yuyin.
    </h1>

    <ContentDoc />
  </section>
</template>
