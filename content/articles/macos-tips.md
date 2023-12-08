---
external: false
title: MacOS使用小技巧
date: 2023-04-19
---

## sudo操作启用指纹验证

`sudo vim /etc/pam.d/sudo`

增加一行

`auth sufficient pam_tid.so`
