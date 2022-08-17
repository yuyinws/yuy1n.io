<script setup lang="ts">
import { formatDate } from '~/logics'

const router = useRouter()

let routes = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
  .filter(i => !i.path.endsWith('.html'))
  .map((i) => {
    return {
      path: i.path,
      title: i.meta.frontmatter.title,
      date: i.meta.frontmatter.date,
      tags: i.meta.frontmatter.tags,
      weight: i.meta.frontmatter.weight ?? 0,
    }
  })

const pins = routes.filter(i => i.weight > 0).sort((a, b) => b.weight - a.weight)
routes = routes.filter(i => i.weight === 0)
</script>

<template>
  <div text-xl text-black dark:text-white>
    <span class="i-ic-twotone-push-pin" rotate-50 />
    <span ml-2>Pinned</span>
  </div>
  <div b-b-1 border-b-dashed mb-2>
    <div
      v-for="(route, index) in pins" :key="index"
      flex
      justify-between
      cursor-pointer
      hover:text-gray-500
      mb-2
      class="dark:hover:text-gray-300"
      @click="router.push({ path: route.path })"
    >
      <div flex-1>
        {{ route.title }}
      </div>
      <div flex-shrink-0>
        {{ formatDate(route.date) }}
      </div>
    </div>
  </div>
  <div
    v-for="(route, index) in routes" :key="index"
    flex
    justify-between
    cursor-pointer
    hover:text-gray-500
    mb-2
    class="dark:hover:text-gray-300"
    @click="router.push({ path: route.path })"
  >
    <div flex-1>
      {{ route.title }}
    </div>
    <div flex-shrink-0>
      {{ formatDate(route.date) }}
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
