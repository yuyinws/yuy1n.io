<script setup lang="ts">
import { useRoute } from 'vue-router'
import Giscus from '@giscus/vue'
import { formatDate, isDark } from '~/logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: false,
  },
})

const route = useRoute()
</script>

<template>
  <div class="prose" m-auto mb-8>
    <h1 mb-0>
      {{ frontmatter?.display ?? frontmatter?.title }}
    </h1>
    <p v-if="frontmatter?.date" class="opacity-50 !-mt-2">
      {{ formatDate(frontmatter?.date) }} <span v-if="frontmatter?.duration">· {{ frontmatter?.duration }}</span>
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

  <client-only>
    <div style="width: 630px;margin: auto">
      <Giscus
        id="comments"
        repo="yuyinws/yuy1n.io"
        repo-id="R_kgDOHxxxig="
        category="Announcements"
        category-id="DIC_kwDOHxxxis4CTInX-hVS"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        :theme="isDark ? 'dark' : 'light'"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  </client-only>
</template>

<style scoped lang="scss">

</style>
