---
title: 将Emoji存入到MySQL中
date: 2021-03-10
tags:
 - JavaScript
 - frontend
categories: 
 - 前端
---

## 问题起因
在某个项目中出现了一小部分用户无法注册系统的问题，经过排查是因为这部分用户的微信昵称中包含emoji，导致用户信息插入数据库时报错。
<!-- more -->
## 解决方法
最开始自然是一顿百度，把数据库、表和字段的编码排列方式都改为了uft8mb4,又修改了mysql的配置文件，结果还是没有解决。

于是又采用了另外一种折中的方法，先将用户微信昵称中的emoji转变为unicode编码，然后再插入到数据库中。这里使用了一个第三方库[umoji](https://github.com/channg/umoji)。

如果不做任何处理，在前端展示用户名昵称的时候只会显示unicode编码。最后用了Javascript中的 **eval()** 函数将unicode编码转变为emoji。
``` js
result.nickName = eval("'" + result.nickName + "'");
```