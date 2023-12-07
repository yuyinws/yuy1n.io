<script setup lang="ts">
console.log('xxxx')
</script>

<template>
  <div class="fixed inset-0 bg-[url(/site/bg-white.jpg)] dark:bg-[url(/site/bg-dark.jpg)] bg-cover bg-center bg-no-repeat" />
  <!-- <div class="fixed inset-0 pointer-events-none bg-repeat bg-top -z-100 bg-[url(/site/grid.svg)] dark:bg-[url(/site/grid-dark.svg)]" /> -->
  <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div class="w-full p-10 bg-zinc-100/70 ring-1 ring-zinc-100 backdrop-blur-xl dark:bg-slate-950/40 dark:ring-zinc-400/20">
        <DarkToggle />

        <NuxtPage />
      </div>
    </div>
  </div>
  <!-- <NavBar></NavBar> -->
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
