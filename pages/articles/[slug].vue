<script setup lang="ts">
definePageMeta({
  name: 'articles',
})

const route = useRoute()

const { data } = await useAsyncData('page-data', () => queryContent(route.path).findOne())

route.meta.title = data.value?.title
</script>

<template>
  <main my-5>
    <ContentRenderer :value="data!">
      <h1 text-4xl font-800 mb-4>
        「 {{ data!.title }} 」
      </h1>

      <NuxtTime class="text-gray-500 dark:text-gray-100" :datetime="data?.date" year="numeric" month="narrow" day="numeric" />

      <ContentRendererMarkdown :value="data!" />
    </ContentRenderer>
  </main>
</template>
