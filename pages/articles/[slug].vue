<script setup lang="ts">
definePageMeta({
  name: 'articles',
})

const route = useRoute()

const { data } = await useAsyncData('page-data', () => queryContent(route.path).findOne())
</script>

<template>
  <main my-5>
    <ContentRenderer :value="data!">
      <h1 text-3xl font-bold>
        「{{ data!.title }}」
      </h1>

      <ContentRendererMarkdown :value="data!" />
    </ContentRenderer>
  </main>
</template>
