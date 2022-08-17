<script setup lang="ts">
const defaultWords: any = []

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

for (const [key, value] of wordMap) {
  defaultWords.push({
    name: key,
    value,
  })
}
function onClick(word: string) {
  router.push(`/tags/${word}`)
}
</script>

<template>
  <WordCloud
    :data="defaultWords"
    font="'Input mono','impact'"
    name-key="name"
    spiral="rectangular"
    :show-tooltip="false"
    value-key="value"
    :font-size="[30, 100]"
    :rotate="{ from: -30, to: 30, numOfOrientation: 5 }"
    :word-click="onClick"
  />
</template>
