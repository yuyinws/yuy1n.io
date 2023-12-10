<script setup lang="ts">
const { data } = await useAsyncData('counter', () => $fetch('/pv?v=1'))
</script>

<template>
  <div flex items-center>
    <i class="i-ri:eye-line" />
    <span ml-2>{{ data?.message || 0 }}</span>
  </div>
</template>
