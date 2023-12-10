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
    <section flex="~ col" gap-4 class="slide-enter">
      <NuxtLink v-for="article in list" :key="article._path" class="op-60 hover:op-100 transition-all transition-duration-500" :to="article._path">
        <h2 text-xl font-bold>
          {{ article.title }}
        </h2>
        <NuxtTime :datetime="article.date" year="numeric" month="narrow" day="numeric" />
      </NuxtLink>
    </section>
  </ContentList>
</template>
