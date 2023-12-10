<script lang="ts" setup>
import MdiGithub from '~icons/mdi/github'
import MdiTwitter from '~icons/mdi/twitter'
import MdiSteam from '~icons/mdi/steam'
import Bili from '~icons/ri/bilibili-fill'

const icons = [
  {
    name: MdiGithub,
    path: 'https://github.com/yuyinws',
    style: 'cursor-pointer hover:bg-slate-800',
  },
  {
    name: MdiTwitter,
    path: 'https://twitter.com/yuyinws',
    style: 'cursor-pointer hover:bg-#00ACEE',
  },
  {
    name: MdiSteam,
    path: 'https://steamcommunity.com/id/yuyinws/',
    style: 'cursor-pointer hover:bg-#24292E',
  },
  {
    name: Bili,
    path: 'https://space.bilibili.com/60406077',
    style: 'cursor-pointer hover:bg-#ea7a99',
  },
]
</script>

<template>
  <div flex gap-2>
    <NuxtLink
      v-for="(icon, index) in icons" :key="index"
      class="inline-flex text-sm items-center justify-center px-3 py-2 rounded-md gap-2 transition-colors decoration-none"
      bg-gray-100
      hover="text-#fff"
      dark="bg-gray-50/10"
      :class="icon.style"
      :to="icon.path"
      target="_blank"
    >
      <component
        :is="icon.name"
      />
    </NuxtLink>
  </div>
</template>
