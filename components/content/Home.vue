<script lang="ts" setup>
import MdiGithub from '~icons/mdi/github'
import MdiTwitter from '~icons/mdi/twitter'
import MdiSteam from '~icons/mdi/steam'
import Bili from '~icons/ri/bilibili-fill'

const icons = [
  {
    name: MdiGithub,
    path: 'https://github.com/yuyinws',
    style: 'cursor-pointer hover:bg-slate-800',
  },
  {
    name: MdiTwitter,
    path: 'https://twitter.com/yuyinws',
    style: 'cursor-pointer hover:bg-#00ACEE',
  },
  {
    name: MdiSteam,
    path: 'https://twitter.com/yuyinws',
    style: 'cursor-pointer hover:bg-#24292E',
  },
  {
    name: Bili,
    path: 'https://twitter.com/yuyinws',
    style: 'cursor-pointer hover:bg-#ea7a99',
  },
]
</script>

<template>
  <h1 text-5xl font-800>
    Hi <span class="unWobble-animation">
      👋
    </span>
    <br>
    I'm yuyin
  </h1>

  <div class="slide-enter mt-5">
    <ProseCodeInline mr-2>
      <ProseStrong>Frontend Developer</ProseStrong>
    </ProseCodeInline>
    <ProseCodeInline>
      <ProseStrong>
        Open Source Enthusiasts
      </ProseStrong>
    </ProseCodeInline>
    <ProseP>
      Base on
      <ProseA href="https://www.google.com/maps/place/Hangzhou,+Zhejiang,+China/">
        Hangzhou China
      </ProseA>
    </ProseP>
    <ProseP>
      Enjoying make some interesting things with coding.
    </ProseP>

    <ProseP>
      You can reach me here:
    </ProseP>

    <div flex gap-2>
      <NuxtLink
        v-for="(icon, index) in icons" :key="index"
        class="inline-flex text-sm items-center justify-center px-3 py-2 rounded-md gap-2 transition-colors decoration-none"
        bg-gray-100 hover="text-#fff" dark="bg-gray-50/10" :class="icon.style" :to="icon.path" target="_blank"
      >
        <component :is="icon.name" />
      </NuxtLink>
    </div>
  </div>
</template>

<style>
@keyframes unWobble {
  0% {
    transform: translateZ(0)
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate(-5deg)
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate(3deg)
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate(-3deg)
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate(2deg)
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate(-1deg)
  }

  to {
    transform: translateZ(0)
  }
}

.unWobble-animation {
  animation: unWobble 1s linear infinite;
  display: inline-block;
}
</style>
