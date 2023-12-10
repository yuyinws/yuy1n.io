<script setup lang="ts">
const { data } = await useAsyncData('counter', () => $fetch('/pv?v=1'))

const counter = ref(0)

watch(data, (val) => {
  if (val?.state === 'ok' && val?.message) {
    const start = 0
    const end = Number(val?.message)

    const duration = 1000 // 滚动的时间
    const stepTime = Math.abs(Math.floor(duration / (end - start))) // 单步滚动的时间间隔

    counter.value = start
    const timer = setInterval(() => {
      counter.value += 1
      if (counter.value >= end)
        clearInterval(timer)
    }, stepTime)
  }
}, {
  immediate: true,
})
</script>

<template>
  <div class="text-gray-500 dark:text-gray-100" flex items-center>
    <i class="i-ri:eye-line" />
    <span ml-2>{{ counter }}</span>
  </div>
</template>
