<script setup lang="ts">
const { page } = useContent()

const greenCirclePosition = computed(() => {
  return {
    top: page.value?.circle?.greenTop || 0,
    left: page.value?.circle?.greenLeft || 0,
  }
})

const blueCirclePosition = computed(() => {
  return {
    top: page.value?.circle?.blueTop || 0,
    left: page.value?.circle?.blueLeft || 0,
  }
})
</script>

<template>
  <span
    v-show="page?.circle"
    from-green via-hex-00DC82 to-teal-500
    class="cicle-animation"
    :style="{
      top: `${greenCirclePosition.top}%`,
      left: `${greenCirclePosition.left}%`,
      transform: 'translate(-50%, -50%)',
    }"
  />

  <span
    v-show="page?.circle"
    from-blue via-hex-67e8f9 to-sky-500
    class="cicle-animation"
    :style="{
      top: `${blueCirclePosition.top}%`,
      left: `${blueCirclePosition.left}%`,
      transform: 'translate(-50%, -50%)',
    }"
  />
</template>

<style lang="scss" scoped>
.cicle-animation {
  --uno: xl-w-70 xl-h-70 xl-blur-80 absolute pointer-events-none rounded-full z--1 bg-gradient-to-r op60 dark-op50 transition-all duration-600 ease-in-out blur-50 w-40 h-40;
}
</style>
