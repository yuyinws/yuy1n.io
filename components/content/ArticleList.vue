<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams
= {
  path: '/articles',
  limit: 0,
  sort: [{ date: -1 }],
  where: {
    // @ts-expect-error any
    date: {
      $exists: true,
    },
    draft: {
      $ne: true && import.meta.env.MODE !== 'development',
    },
  },
}

function isCurrentYear(date: string) {
  return new Date(date).getFullYear() === new Date().getFullYear()
}
</script>

<template>
  <ContentList v-slot="{ list }" :query="query">
    <section flex="~ col" gap-2 mt-5 class="slide-enter">
      <NuxtLink v-for="article in list" :key="article._path" class="flex justify-between op-80 hover:op-100 transition-all transition-duration-500" :to="article._path">
        <h2 text-base font-medium>
          {{ article.title }}
        </h2>
        <NuxtTime :datetime="article.date" :year="isCurrentYear(article.date) ? undefined : 'numeric'" month="2-digit" day="2-digit" />
      </NuxtLink>
    </section>
  </ContentList>
</template>
