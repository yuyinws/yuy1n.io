<script setup lang="ts">
import { isDark } from '~/logics'

const route = useRoute()

const navList = ref([
  {
    name: 'Posts',
    path: 'posts',
    icon: 'i-ri-article-line',
    style: '',
  },
  {
    name: 'Tags',
    path: 'tags',
    icon: 'i-ri:price-tag-line',
    style: '',
  },
  {
    name: 'Projects',
    path: 'projects',
    icon: 'i-ri-lightbulb-line',
    style: '',
  },
  {
    name: 'Bookmarks',
    path: 'bookmarks',
    icon: 'i-ri-bookmark-line',
    style: '',
  },
  {
    name: 'Notes',
    path: 'notes',
    icon: 'i-ri-sticky-note-line',
    style: '',
  },
])

watch(route, (val) => {
  navList.value = navList.value.map((i) => {
    i.style = 'opacity-60 hover:opacity-100 transition-opacity-200 ease'
    if (i.path === val.name)
      i.style = 'b-b-1 b-b-dashed cursor-default'

    return i
  })
}, { immediate: true })
</script>

<template>
  <header class="header z-40">
    <router-link class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none" to="/" focusable="false">
      <img v-show="!isDark" class="logo" src="/logo.svg" alt="logo">
      <img v-show="isDark" class="logo" src="/logo-dark.svg" alt="logo">
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <router-link v-for="(item, index) in navList" :key="index" :to="`/${item.path}`" :title="item.name">
          <span :class="`${item.style} lt-md:hidden`">{{ item.name }}</span>
          <div :class="`${item.icon} ${item.style} md:hidden`" />
        </router-link>
        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo:hover {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav>* {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right>* {
  margin: auto;
}
</style>
