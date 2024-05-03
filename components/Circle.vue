<script setup lang="ts">
const { page } = useContent()

const top = computed(() => {
  return page.value?.circle?.top || 0
})

const left = computed(() => {
  return page.value?.circle?.left || 0
})
</script>

<template>
  <span
    v-show="page?.circle"
    absolute pointer-events-none rounded-full z--1
    bg-gradient-to-r from-green via-hex-00DC82 to-teal-500
    op60 dark:op50
    class="transition-all duration-600 ease-in-out"
    :style="{
      top: `${top}%`,
      left: `${left}%`,
      transform: 'translate(-50%, -50%)',
    }"
    blur-50
    w-40 h-40
    xl="w-70 h-70 blur-80"
  />
</template>
