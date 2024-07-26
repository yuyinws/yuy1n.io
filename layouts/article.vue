<script setup lang="ts">
import Giscus from '@giscus/vue'

const { page } = useContent()

const articleRef = ref()
</script>

<template>
  <main px-6 xl:px-4 pt-4 min-h-screen>
    <AppHeader />
    <div class="max-w-3xl mx-auto">
      <article ref="articleRef">
        <h1 font-800 text-3xl mb-3>
          「{{ page.title }}」
        </h1>
        <ProseP flex items-center>
          <NuxtTime class="text-gray-500 dark:text-gray-100" :datetime="page?.date" year="numeric" month="narrow" day="numeric" />
          <span font-800 mx-2>&#183;</span>
          <ClientOnly>
            <ReadCounter />
          </ClientOnly>
        </ProseP>
        <div class="slide-enter">
          <slot />
        </div>
      </article>

      <PagePrevNext />

      <Giscus
        repo="yuyinws/yuy1n.io"
        repo-id="R_kgDOJIyh5A"
        category="Announcements"
        category-id="DIC_kwDOJIyh5M4CV4Xq"
        mapping="pathname"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="bottom"
        theme="preferred_color_scheme"
        lang="zh-CN"
      />
    </div>
  </main>
</template>
