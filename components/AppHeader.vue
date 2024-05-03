<script lang="ts" setup>
import Logo from '~icons/custom/logo'
import Light from '~icons/ri/lightbulb-line'
import Article from '~icons/ri/article-line'

const icons = [
  {
    activePage: ['Home'],
    path: '/',
    name: Logo,
    style: 'hover:text-black',
    active: 'text-black',
  },
  {
    activePage: ['articles', 'articles-index'],
    path: '/articles',
    name: Article,
    style: 'hover:text-blue-500',
    active: 'text-blue-500',
  },
  {
    activePage: ['Projects'],
    path: '/projects',
    name: Light,
    style: 'hover:text-yellow-500',
    active: 'text-yellow-500',
  },
]

const { page } = useContent()
</script>

<template>
  <header flex justify-between>
    <div flex gap-3>
      <NuxtLink
        v-for="icon in icons" :key="icon.path" :to="icon.path"
      >
        <component
          :is="icon.name"
          :class="[icon.style, icon.activePage.includes(page?.pageName as string) ? icon.active : 'text-gray-400']" cursor-pointer w-5 h-5
        />
      </NuxtLink>
    </div>
    <div>
      <DarkToggle w-7 h-7 />
    </div>
  </header>
</template>
