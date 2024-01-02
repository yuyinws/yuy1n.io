---
pageName: articles
layout: article
title: 面试题汇总
date: 2024-01-01
draft: true
---

## 原型与原型链

### 原型(prototype)

所有构造函数有一个特殊的属性叫`prototype`，使用构造函数创建的对象实例共享这个`prototype`。`prototype`上除了自定义的属性，还有一个默认的属性叫`constructor`，用于记录实例是由哪个构造函数创建的。

```js
 function Person(name, age){ 
    this.name = name;
    this.age = age;
 }
 
Person.prototype.motherland = 'China'
let person01 = new Person('小明', 18);
```

**person01**

![person01](/articles/person01.jpg)

### 原型链( \_\_proto\_\_ )

使用构建函数创建的对象都有一个属性叫作`__proto__`，它指向这个对象对应的构造函数的`prototype`。当访问一个对象的属性时，如果它自身不存在，则会从它的`__proto__`中去查找，如果还是找不到则从构造函数的`prototype`的`__proto__`去寻找，直到找到或者原型链结束为止。这样一层层就形成了`原型链`。

## 事件循环

JavaScript中的任务分为`同步任务`和`异步任务`。在JavaScript的主线程中，依次执行所有的同步任务，在遇到异步任务时，会将其挂起，继续执行同步任务。当异步任务有了结果之后，会把这个异步任务的回调放置到一个任务队列中。

当主线程中的所有同步任务执行完成后，会将任务队列中的任务取出到主线程中执行。

`异步任务`又分为`微任务`和`宏任务`。

常见的微任务有：
- Promise().then()
- Pormise().catch()
- MutaionObserver()

> new Promise() 不是异步任务

常见的宏任务有：
- setInterval()
- setTimeout()
- ajax
- mouse event

**微任务的执行顺序先于宏任务。**

```js
// This is a JavaScript Quiz from BFE.dev

console.log(1)
const promise = new Promise((resolve) => {
  console.log(2)
  resolve()
  console.log(3)
})

console.log(4)

promise.then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)

setTimeout(() => {
  console.log(8)
}, 10)

setTimeout(() => {
  console.log(9)
}, 0)
```

输出结果：
`1 2 3 4 7 5 6 9 8`
