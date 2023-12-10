---
pageName: articles
layout: article
title: Vite打包时注入时间字符串到Vue模板中
date: 2022-03-29
---

有时，我们希望在访问生产环境网页时可以看到上一次构建的一些信息，如构建版本，构建时间等。下面介绍如何使用Vite达成这种效果。

1. 在`vite.config.js`中使用`define`定义一个全局变量

```js [vite.config.js]
defineConfig({
    define:{
		__BUILD_TIME__: JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss'))        
    }
})
```

2. 在Vue文件中使用

```vue
<script setup>
const BUILD_TIME = __BUILD_TIME__
</script>

<template>
  {{ BUILD_TIME }}
</template>
```

