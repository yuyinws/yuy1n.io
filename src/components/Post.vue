<script setup lang="ts">
import { useRoute } from 'vue-router'
import { formatDate } from '~/logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const route = useRoute()
</script>

<template>
  <div class="prose" m-auto mb-8>
    <h1 mb-0>
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="opacity-50 !-mt-2">
      {{ formatDate(frontmatter.date) }} <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
    </p>
  </div>

  <article ref="content">
    <slot />
  </article>
  <div v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8">
    <router-link
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="font-mono no-underline opacity-50 hover:opacity-75"
    >
      ← Back
    </router-link>
  </div>
</template>

<style scoped lang="scss">

</style>
