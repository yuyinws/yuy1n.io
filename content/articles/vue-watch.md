---
external: false
title: Vue Watch使用相关问题记录
date: 2023-07-15
---


## 只监听数组的某几个元素变化

对一个响应式数组，有时候我们只需要监听其中的某几个元素的变化，可以结合`computed`来实现这个效果:
```js
const _arr = ref([
  {
    name: 'foo',
    value: null,
  },
  {
    name: 'bar',
    value: null,
  },
  {
    name: 'height',
    value: null,
  },
  {
    name: 'weight',
    value: null,
  },
  {
    name: 'BMI',
    value: null,
  },
])

const needWatchArr = computed(() => {
  return _arr.value.filter(i => ['weight', 'height'].includes(i.name))
})

watch(
  needWatchArr,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { deep: true }
)
```

{% stackblitz id="vitejs-vite-9aavre" /%}

## 监听引用类型响应式值时新旧值相同的问题

在监听引用类型时，会出现新旧值相同的问题，可以使用深拷贝解决：
```js
const foo = ref({
  name: 'bar',
  age: 1,
})

watch(
  () => cloneDeep(foo),
  (newV, oldV) => {
    console.log(newV, oldV)
  },
  { deep: true }
)
```

{% stackblitz id="vitejs-vite-hs91du" /%}
