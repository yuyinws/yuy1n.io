---
external: false
title: 如何Vue3中给元素绑定ref
date: 2022-02-23
---

在Vue2中，元素的ref属性可以通过`$ref`获取，示例代码：
```vue
<template>
  <input ref="inputRef" />
</template>
<script>
...
  mounted:{
    this.$ref['inputRef'].focus()
  }
...
</script>
```

Vue3的组合式API移除了`$ref`，写法改为如下：
```vue
<template>
  <input ref="inputRef" />
</template>
<script setup>
...
const inputRef = ref(null)
onMounted(() => {
  inputRef.value.focus()
})
...
</script>
```

在`v-for`中循环绑定`ref`
```vue

<div v-for="item in list" :ref="setItemRef"></div>


<script setup>
...
let itemRefs = []

const setItemRef = (el) => {
  if(el) {
    itemRefs.push(el)
  }
} 
...
</script>
```

在`ref`绑定到`reactive`中
```vue
<input :ref="(el) => (inputRefs['input1Ref'] = el)" />
<input :ref="(el) => (inputRefs['input2Ref'] = el)" />

<script setup>
let inputRefs = reactive({
  input1Ref: null,
  input2Ref: null
})

onBeforeUpdate(() => {
  itemRefs = []
})

</script>
```
