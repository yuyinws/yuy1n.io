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
    Twitter: 'https://twitter.com/yuyinws'
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

Find Me On:
<br>
<div flex gap-2>
  <a href="https://github.com/yuyinws">Github</a>
  <a href="https://steamcommunity.com/id/yuyinws/">Steam</a>
  <a href="https://twitter.com/yuyinws">Twitter</a>
</div>
