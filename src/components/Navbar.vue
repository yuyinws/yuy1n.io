<script setup lang="ts">
</script>

<template>
  <header class="header z-40">
    <router-link class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none" to="/" focusable="false">
      <img class="logo" src="/logo.svg" alt="logo">
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <router-link to="/posts" title="Blog">
          <span class="lt-md:hidden">文章</span>
          <div i-ri-article-line md:hidden />
        </router-link>
        <router-link to="/projects" title="Projects">
          <span class="lt-md:hidden">项目</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </router-link>
        <router-link to="/bookmarks" title="Bookmarks">
          <span class="lt-md:hidden">书签</span>
          <div i-ri-bookmark-line md:hidden />
        </router-link>
        <router-link to="/notes" title="Notes">
          <span class="lt-md:hidden">笔记</span>
          <div i-ri-sticky-note-line md:hidden />
        </router-link>
        <a href="https://github.com/yuyinws" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
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

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
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
