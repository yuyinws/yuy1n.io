<script setup lang="ts">
const props = defineProps<{
  id: string
}>()

const src = computed(() => `https://stackblitz.com/edit/${props.id}?embed=1&file=src%2FApp.vue`)
</script>

<template>
  <iframe
    width="100%"
    height="500px"
    :src="src"
  />
</template>
