<script setup lang="ts">
const props = defineProps<{
  id: string
}>()

const src = computed(() => `https://stackblitz.com/edit/${props.id}?embed=1&file=src%2FApp.vue`)
</script>

<template>
  <div h-100 w-full>
    <iframe
      :src="src"
      h-100 w-full
    />
  </div>
</template>
