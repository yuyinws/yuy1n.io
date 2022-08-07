---
title: JS中的encodeURI与encodeURIComponent
date: 2021-01-27
sidebarDepth: 1
description: 分析encodeURI与encodeURIComponent的区别
tags:
 - JavaScript
 - frontend
keyword: 
- encodeURI
- encodeURIComponent
categories: 
 - 前端
---
## 作用
[encodeURI()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 和 [encodeURIComponent()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 都用于对字符串的转义，区别在于2个函数的转义范围不同。

## 区别
encodeURI不转义的字符
| 类型|包含|
|---|---|
|保留字符|; , / ? : @ & = + $|
|非转义的字符|字母 数字 - _ . ! ~ * ' ( )|
|数字符号|#|

encodeURIComponent不转义的字符
> 字母 数字 - _ . ! ~ * ' ( )