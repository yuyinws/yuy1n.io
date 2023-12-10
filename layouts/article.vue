<script setup lang="ts">
import Giscus from '@giscus/vue'

const { page } = useContent()

const router = useRouter()
function goBack() {
  router.replace({
    path: '/articles',
  })
}

const articleRef = ref()

function goTop() {
  articleRef.value?.scrollIntoView(
    {
      behavior: 'smooth',
      block: 'start',
    },
  )
}
</script>

<template>
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
    <div flex items-center gap-2 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 @click="goBack">
      <i class="i-radix-icons:arrow-left" />
      Back
    </div>
    <div class="slide-enter">
      <slot />
    </div>
  </article>
  <div flex items-center gap-2 mt-2 mb-5 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 @click="goTop">
    <i class="i-radix-icons:arrow-up" />
    Top
  </div>

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
</template>
