---
title: 网络图片base64化
date: 2021-09-30
tags:
 - base64
 - JavaScript
---

### 通过http请求获取图片的blob流
以axios为例
``` js
axios({
  method:'get',
  url:'https://xxxx.png',
  responseType:'blob'
})
```

### 使用FileReader()获取base64
``` js
  let oFileReader = new FileReader()
  oFileReader.readAsDataURL(response)
  oFileReader.onloadend = (e) => {
    const base64 = e.target.result
  }
```

### 合并写法
``` js
axios({
  method:'get',
  url:'https://xxxx.png',
  responseType:'blob'
}).then(response => {
  let oFileReader = new FileReader()
  oFileReader.readAsDataURL(response)
  oFileReader.onloadend = (e) => {
  const base64 = e.target.result
}
})
```
