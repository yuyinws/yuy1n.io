<script setup lang='ts'>
defineProps({
  icon: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <a class="select-none cursor-pointer">
    <ri-github-line text-5 />
  </a>
</template>

<style scoped>
a {
  border-bottom: none!important;
}
</style>
