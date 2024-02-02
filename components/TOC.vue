<script lang="ts" setup>
defineProps<{
  data: any
}>()
</script>

<template>
  <div class="sticky top-0 transition-all transition-duration-500">
    <ul class="absolute top-10 left-10 trigger transition-all transition-duration-500">
      <div class="i-radix-icons:text-align-justify h-6 w-6 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all transition-duration-500" />
      <li v-for="link of data.links" :key="link.text" class="anchor transition-all transition-duration-500">
        <a :href="`#${link.id}`" class="text-gray-500 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
.anchor {
  opacity: 0;
}

.trigger:hover > .anchor {
  opacity: 1;
}
</style>
