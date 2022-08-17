<script lang="ts" setup>
import { formatDate } from '~/logics'

const router = useRouter()
const route = useRoute()
const tag = route.params.tag

const routes = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
  .filter(i => !i.path.endsWith('.html'))
  .filter(i => i.meta.frontmatter.tags.includes(tag))
  .map((i) => {
    return {
      path: i.path,
      title: i.meta.frontmatter.title,
      date: i.meta.frontmatter.date,
      tags: i.meta.frontmatter.tags,
      weight: i.meta.frontmatter.weight ?? 0,
    }
  })
</script>

<template>
  <Post>
    <div class="prose m-auto">
      <div mb-10 text-2xl font-bold>
        <i class="i-ri:price-tag-line" />
        <span ml-2>{{ tag }}</span>
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
    </div>
  </Post>
</template>
