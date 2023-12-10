<script setup lang="ts">
const { page } = useContent()

const router = useRouter()
function goBack() {
  router.replace({
    path: '/articles',
  })
}
</script>

<template>
  <article>
    <h1 font-800 text-3xl mb-3>
      「{{ page.title }}」
    </h1>
    <prose-p>
      <NuxtTime class="text-gray-500 dark:text-gray-100" :datetime="page?.date" year="numeric" month="narrow" day="numeric" />
    </prose-p>
    <div flex items-center gap-2 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 @click="goBack">
      <i class="i-radix-icons:arrow-left" />
      Back
    </div>
    <slot />
  </article>
</template>
