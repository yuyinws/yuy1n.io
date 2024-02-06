---
pageName: articles
layout: article
title: MacOS使用小技巧
date: 2023-04-19
ogImage:
  component: NuxtSeo
---

## sudo操作启用指纹验证

`sudo vim /etc/pam.d/sudo`

在第1行加入：

```diff [/etc/pam.d/sudo]
+ auth sufficient pam_tid.so
```
