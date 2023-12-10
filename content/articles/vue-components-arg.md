---
pageName: articles
layout: article
title: Vue组件事件存在默认参数问题
date: 2022-03-31
---

### 第三方组件

在Vue中使用组件时，有时会遇到组件存在默认参数这种情况，如：

```vue
<template>
  <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :headers="{
      'naive-info': 'hello!'
    }"
    :data="{
      'naive-data': 'cool! naive!'
    }"
    :custom-request="customRequest"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>

<script lang="ts">
export default defineComponent({
  setup () {
    const customRequest = ({
      file,
      data,
      headers,
      withCredentials,
      action,
      onFinish,
      onError,
      onProgress
    }: UploadCustomRequestOptions) => {
    
    })
    }
    return {
      customRequest
    }
  }
})
</script>
```

`n-upload`组件中的`custom-request`事件存在默认参数，这时如果想要传递一个自定义参数，一般的做法会覆盖掉这个默认参数，解决方法是使用箭头函数进行二次参数传递。

```vue
<template>
  <n-upload
    :custom-request="(event) => customRequest(event, args)">
  </n-upload>
</template>

<script>
export default defineComponent({
  setup () {
    const customRequest = ({
      file,
      data,
      headers,
      withCredentials,
      action,
      onFinish,
      onError,
      onProgress
    },args) => {
    
    })
    }
    return {
      customRequest
    }
  }
})
</script>
```

### 原生组件

对于HTML原生组件，如`Input`、`Button`等，则可以使用`$event`来获取组件的原生参数。如：

```html
<button v-on:click="doThat('hello', $event)"></button>
```



