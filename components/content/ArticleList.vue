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
</script>

<template>
  <ContentList v-slot="{ list }" :query="query">
    <section flex="~ col" class="slide-enter">
      <template v-for="(article, index) in list" :key="article._path">
        <span v-if="article.yearLast || index === 0" text-10 op-40 dark:op-70 font-bold cursor-default>
          {{ new Date(article.date).getFullYear() }}
        </span>
        <NuxtLink
          class="text-18px flex gap-4 mb-2 op-70 hover:font-medium hover:op-100 transition-all transition-duration-500"
          :to="article._path"
        >
          <span>
            {{ article.title }}
          </span>
          <NuxtTime flex-shrink-0 op-50 :datetime="article.date" month="short" day="numeric" />
        </NuxtLink>
      </template>
    </section>
  </ContentList>
</template>
