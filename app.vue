<script setup lang="ts">
</script>

<template>
  <!-- <div class="fixed inset-0 bg-[url(/site/bg-white.jpg)] dark:bg-[url(/site/bg-dark.jpg)] bg-cover bg-center bg-no-repeat" /> -->
  <!-- <div class="fixed inset-0 pointer-events-none bg-repeat bg-top -z-100 bg-[url(/site/grid.svg)] dark:bg-[url(/site/grid-dark.svg)]" /> -->
  <!-- <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl p-8">
      <NuxtPage />
    </div>
  </div> -->
  <!-- <NavBar></NavBar> -->
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
