<script setup lang="ts">
const projectList = [
  {
    name: 'Steam Card',
    icon: '⚡',
    description: 'Generate your Steam profile card quickly.',
    href: 'https://card.yuy1n.io',
  },
  {
    name: 'v2erminal',
    icon: '📺',
    description: 'Interactive terminal client for V2EX.',
    href: 'https://github.com/yuyinws/v2erminal',
  },
  {
    name: 'comm1t',
    icon: '🔦',
    description: 'Find repository\'s first commit.',
    href: 'https://github.com/yuyinws/comm1t',
  },
  {
    name: 'NSFileShare',
    icon: '🎮',
    description: '一个将Switch中的媒体文件快速保存至手机的App.',
    href: 'https://github.com/yuyinws/NSFileShare',
  },
  {
    name: 'unplugin-turbo-console',
    icon: '🚀',
    description: 'Improve the Developer Experience of console.log()',
    href: 'https://github.com/unplugin/unplugin-turbo-console',
  },
  {
    name: 'switch-card',
    icon: '🎛️',
    description: '查看并分享你的 Nintendo Switch 游戏记录',
    href: 'https://ns.yuy1n.io',
  },
  {
    name: 'stargazers',
    icon: '⭐️',
    description: 'Analyze and explore the stars of any GitHub user.',
    href: 'https://stargazers.dev',
  },
  {
    name: 'vscode-array-index',
    icon: '𝟘𝟙',
    description: 'A VSCode extension to help you check array index.',
    href: 'https://marketplace.visualstudio.com/items?itemName=yuyinws.vscode-array-index',
  },
]
</script>

<template>
  <div class="slide-enter">
    <div grid gap-4 grid-cols-1 sm:grid-cols-2 mb-4>
      <ProjectCard
        v-for="(item, index) in projectList" :key="index"
        :data="item"
      />
    </div>
    <div w-full flex justify-end>
      <NuxtLink
        href="https://github.com/yuyinws?tab=repositories&q=&type=source&language=&sort=stargazers"
        target="_blank"
        class="italic opacity-50 hover:opacity-100"
      >
        more...
      </NuxtLink>
    </div>
  </div>
</template>
