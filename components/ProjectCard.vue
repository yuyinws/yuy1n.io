<script setup lang="ts">
defineProps<{
  data: any
}>()
</script>

<template>
  <NuxtLink :to="data.href" target="_blank" class="flex px-4 py-3 rounded-md bg-gray-500/10 hover:bg-gray-500/20 dark:bg-gray-50/10 dark:hover:bg-gray-50/20">
    <div class="flex leading-none gap-5">
      <div class="text-2xl text-center w-5 flex items-center">
        {{ data.icon }}
      </div>
      <div class="flex flex-col gap-3">
        <div class="font-bold">
          {{ data.name }}
        </div>
        <div class="text-xs opacity-50">
          {{ data.description }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
