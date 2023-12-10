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
  },
}
</script>

<template>
  <ContentList v-slot="{ list }" :query="query">
    <section flex="~ col" gap-4 mt-5>
      <NuxtLink v-for="article in list" :key="article._path" :to="article._path">
        <h2 text-xl font-bold class="hover:text-slate-900/50 dark:hover:text-zinc-400">
          {{ article.title }}
        </h2>
        <NuxtTime class="text-gray-500 dark:text-gray-100" :datetime="article.date" year="numeric" month="narrow" day="numeric" />
      </NuxtLink>
    </section>
  </ContentList>
</template>
