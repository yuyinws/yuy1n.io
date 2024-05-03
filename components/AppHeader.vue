<script lang="ts" setup>
import Logo from '~icons/custom/logo'
</script>

<template>
  <header flex justify-between items-center mb-5>
    <NuxtLink to="/">
      <Logo w-8 h-8 dark:text-white cursor-pointer />
    </NuxtLink>

    <div flex items-center gap-5>
      <NuxtLink
        transition-all transition-duration-500
        op-50 cursor-pointer hover:op-100
        text-lg
        to="/articles"
      >
        Blogs
      </NuxtLink>

      <NuxtLink
        transition-all transition-duration-500
        op-50 cursor-pointer hover:op-100
        text-lg
        to="/projects"
      >
        Projects
      </NuxtLink>

      <DarkToggle text-lg />
    </div>
  </header>
</template>
