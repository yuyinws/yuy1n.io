---
title: YuYinWS
display: About Me
---

```js
import { ref,reactive,onMounted } from 'vue'

export function aboutMe() {
  const name = 'YuYinWS'
  const tecStack = ref(['Vue','TypeScript','Vite','Git','Node'])
  const social = reactive({
    Github: 'https://github.com/yuyinws',
    Steam: 'https://steamcommunity.com/profiles/76561198340841543',
    Weibo: 'https://weibo.com/u/1944843262'
  })
  const hobbies = ref(['Coding','Moving','Music'])

  return {
    name,
    tecStack,
    social,
    hobbies
  }
}
```
