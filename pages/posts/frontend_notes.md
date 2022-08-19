---
title: 前端踩坑记录及小技巧
date: 2020-12-17
tags:
 - frontend
 - JavaScript
weight: 1
---

{toc}

## 踩坑
### vant-ui与Vue引入顺序
使用cdn引入vant和vue需要注意顺序，官方文档实例:
``` js
// vue需要在vant之前引入
<script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@2.11/lib/vant.min.js"></script>
```
### webpack中的publicPath
在某个Vue项目中，线上路径是http://xxxx.com/app, 本地dev环境下开发路径为http://localhost/app， 提示许多静态资源（js、css文件）加载失败。排查过后发现是webpack中dev模式下的publicPath没有设置导致的。将该属性设置为'/app'即可正常加载静态资源。
在新版本的Vue中该属性在项目根目录下的vue.config.js文件中设置
``` js
// vue.config.js
module.exports = {
  publicPath: '/my-app',
  outputDir: 'dist2'
}
```
## 技巧
### 手机号正则
``` js
let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
reg.test(phoneNumber) #符合返回true，不符合返回false
```
### 邮箱正则
``` js
let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
reg.test(email) #符合返回true，不符合返回false
```
### 获取URL参数
``` js
#传入要获取的参数名
function GetQueryString(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  const r = window.location.search.substr(1).match(reg)// search,查询？后面的参数，并匹配正则
  if (r != null)
    return decodeURI(r[2]); return null
}
```
### 移动端进行控制台调试
在head标签里加入
``` js
<script src="https://cdn.bootcss.com/eruda/1.4.3/eruda.min.js"></script>
<script>eruda.init();</script>
```
### CSS-超出div用...替代
在css样式中加入
``` css
.hidden {
    text-overflow:-o-ellipsis-lastline;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp:1;
    -webkit-box-orient: vertical;
}
```
