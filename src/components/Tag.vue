<script setup lang="ts">
interface Tag {
  name: string
  count: number
}

const tagArr: Tag[] = []
const wordMap = new Map()
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
      weight: i.meta.frontmatter.weight ?? 0,
    }
  })
routes.forEach((item) => {
  item.tags.forEach((tag: string) => {
    if (wordMap.has(tag))
      wordMap.set(tag, wordMap.get(tag)! + 1)
    else
      wordMap.set(tag, 1)
  },
  )
})
for (const [key, count] of wordMap) {
  tagArr.push({
    name: key,
    count,
  })
}

tagArr.sort((a, b) => b.count - a.count)
function onClick(word: string) {
  router.push(`/tags/${word}`)
}
</script>

<template>
  <div flex flex-wrap gap-5>
    <div
      v-for="(item, index) in tagArr" :key="index" flex items-center justify-center ease transition-all cursor-pointer relative p-3 bg-gray-200 dark:bg-gray-700
      rounded-xl text-black w-30 dark:text-white h-15 hover:w-35 hover:h-18 flex-shrink-0 flex-grow-0
      @click="onClick(item.name)"
    >
      <div>
        {{ item.name }}
      </div>
      <div absolute top-0 right-2>
        {{ item.count }}
      </div>
    </div>
  </div>
</template>
