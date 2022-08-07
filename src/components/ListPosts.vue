<script setup lang="ts">
import { formatDate } from '~/logics'

const router = useRouter()

const routes = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
  .filter(i => !i.path.endsWith('.html'))
  .map((i) => {
    return {
      path: i.path,
      title: i.meta.frontmatter.title,
      date: i.meta.frontmatter.date,
      tags: i.meta.frontmatter.tags,
    }
  })
</script>

<template>
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
