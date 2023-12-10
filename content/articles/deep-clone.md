---
pageName: articles
layout: article
title: Javascript中的深拷贝与浅拷贝
date: 2021-03-12
---

## 两段代码
先来看2段代码
``` js
const a = '小红'
let b = a
b = '小明'
console.log(a)
```
会打印出什么？很明显会输出小红，因为改变的是变量b的值，变量的a的值没有发生改变。

再来看一段代码
``` js
const a = {
  name: '小红',
  age: 22,
}

const b = a
b.name = '小明'
console.log(a.name)
```
如果按照第一段代码的逻辑，这里应该也会输出小红，因为改变的是b.name的值，a.name的值并没有发生改变，但实际上会输出 **小明**。

为什么会发生这种情况呢？
>因为变量的a的数据类型是一个对象，当a向b复制值时，同样也会将存储在变量对象中的值复制一份放到为新变量分配的空间中。不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个对象。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会改变另一个变量。——摘自《JavaScript高级程序设计(第三版)》4.1.2节。

以下是上面2段代码的赋值示意图：
![image-20210312214733922](https://i.loli.net/2021/03/12/YjyDUITGPZAC4FX.png)


![image-20210312215149476](https://i.loli.net/2021/03/12/nJBfy3qGPo2HNYM.png)

## 基本类型和引用类型
同样是变量，为什么会出现2种不同的复制情况呢？
其实这与变量的类型有关，JS种的变量分为两个大类：基本类型和引用类型

基本类型包括：
- Number
- String
- Boolean
- Null
- Undefined

引用类型包括
- Function
- Array
- Object
- Date
- RegExp

其中类型属于引用类型的变量值指向堆内存中的对象，从引用类型复制出来的多个副本的值也指向同一个对象。

## 深拷贝与浅拷贝
深拷贝与浅拷贝是针对引用类型来说的，基本类型不存在深、浅拷贝的区分。
浅拷贝顾名思义，指拷贝后新、旧变量的值指向堆内存中的同一个对象。
深拷贝则是拷贝后新、旧变量的值指向不同的对象。

### 深拷贝的实现方式
如果对象或数组只有一层，可以用ES6拓展运算符实现深拷贝。
``` js
const a = {
  name: '小红',
  age: 23
}

const b = { ...a }
b.name = '小明'
console.log(a.name) // 输入小红，深拷贝成功
```

如果对象或数组包含多层，可以通过以下方法实现深拷贝
``` js
function deepClone(obj) {
  const objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object')
        objClone[key] = deepClone(obj[key])

      else
        objClone[key] = obj[key]
    }
  }
  return objClone
}

const a = {
  stu: {
    name: '小红',
    age: 23,
  },
}

const b = deepClone(a)
b.stu.name = '小明'
console.log(a.stu.name) // 输出小红
```

