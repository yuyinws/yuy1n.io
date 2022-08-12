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
    Steam: 'https://steamcommunity.com/id/yuyinws',
    Twitter: 'https://twitter.com/yuyinws',
    Keylol: 'https://keylol.com/suid-518292',
    V2ex: 'https://www.v2ex.com/member/lyc575757',
  })
  const hobbies = ref(['Coding','Movie','Music'])

  onMounted(() => {
    console.log('Hello World!')
  })

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
  <a href="https://keylol.com/suid-518292">Keylol</a>
  <a href="https://www.v2ex.com/member/lyc575757">V2ex</a>
</div>
