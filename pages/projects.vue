<script setup lang="ts">
const themes = ['dark', 'radical', 'merko', 'gruvbox', 'tokyonight', 'onedark', 'cobalt', 'synthwave', 'highcontrast', 'dracula']

const projects = ref([
  {
    href: 'https://card.yuy1n.io',
    repo: 'steam-card',
    theme: 'dark',
  },
  {
    href: 'https://comm1t.yuy1n.io',
    repo: 'comm1t',
    theme: 'radical',
  },
  {
    href: 'https://github.com/yuyinws',
    repo: 'NSFileShare',
    theme: 'merko',
  },
  {
    href: 'https://github.com/yuyinws/NSFileShare',
    repo: 'NSFileShare',
    theme: 'gruvbox',
  },
  {
    href: 'https://apex.yuy1n.io/',
    repo: 'apex-tools-frontend',
    theme: 'tokyonight',
  },
])
</script>

<template>
  <div flex="~ wrap col" max-h-600px justify-center items-center gap-2>
    <a v-for="(item, index) in projects" :key="index" w-400px :href="item.href">
      <img w-full :src="`https://readme.yuy1n.io/api/pin/?username=yuyinws&repo=${item.repo}&theme=${item.theme}`">
    </a>
  </div>
</template>
