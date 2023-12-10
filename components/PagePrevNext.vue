<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <div flex justify-between mb-5>
    <NuxtLink v-if="prev" :to="prev._path">
      <div class="page-card">
        <div flex text-sm items-center gap-1>
          <i class="i-radix-icons:double-arrow-left" />
          Prev
        </div>
        <span line-clamp-1>
          {{ prev?.title }}
        </span>
      </div>
    </NuxtLink>
    <NuxtLink v-if="next" :to="next._path">
      <div class="page-card">
        <div flex text-sm items-center justify-end gap-1>
          Next
          <i class="i-radix-icons:double-arrow-right" />
        </div>
        <span line-clamp-1>
          {{ next?.title }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.page-card {
  --uno: w-80 break-all rounded-md bg-gray-50 hover:bg-gray-100 px-5 py-3 text-gray-800 dark:bg-#333 dark:text-gray-50 dark:hover:bg-#333/50;
}
</style>
