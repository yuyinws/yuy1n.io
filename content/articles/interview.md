---
pageName: articles
layout: article
title: 面试题汇总
date: 2024-01-01
draft: true
toc: true
---

## 原型与原型链

### 原型(prototype)

所有函数对象有一个特殊的属性叫`prototype`，使用构造函数创建的对象实例共享这个`prototype`。`prototype`上除了自定义的属性，还有一个默认的属性叫`constructor`，用于记录实例是由哪个构造函数创建的。

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

每个实例对象都有一个私有属性 `__proto__`。该属性指向它的构造函数的原型对象 prototype。该原型对象的 __proto__ 也可以指向其他构造函数的 prototype。依次层层向上，直到一个对象的 __proto__ 指向 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

当访问一个对象的属性时，如果它自身不存在，则会从它的`__proto__`中去查找，如果还是找不到则从构造函数的`prototype`的`__proto__`去寻找，直到找到或者原型链结束为止。这样一层层就形成了`原型链`。

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

## 浏览器渲染HTML的过程

### 渲染模块：
- HTML解释器：解释HTML语言的解释器，本质是将HTML文本解释成DOM树（文档对象模型）。

- CSS解释器：解释样式表的解释器，其作用是将DOM中的各个元素对象加上样式信息，从而为计算最后结果的布局提供依据。

- 布局：将DOM和css样式信息结合起来，计算它们的大小位置等布局信息，形成一个能够表示这所有信息的内部表示模型即渲染树。

- JavaScript引擎：JavaScript可以修改网页的内容，也能修改CSS的信息，JavaScript引擎解释JavaScript代码并把代码的逻辑和对DOM和CSS的改动信息应用到布局中去，从而改变渲染的结果。

### 过程

1. **构建DOM树**:浏览器解析html源码，创建DOM树。同时并行请求css/js/image等静态资源。当HTML解析器发现script标签时，会暂停HTML的解析，转而开始加载、解析和执行JavaScript。可以为script标签添加`defer`属性或将script放在body之后来避免这种情况。

2. **样式计算**:浏览器解析css，计算出最终的样式数据，构建css树. CSSOM（CSS Object Model）

3. **Layout阶段**:将CSS和DOM合并，构建渲染树。渲染树回忽略掉不需要渲染的元素，比如head、display:none的元素等。

4. 浏览器根据渲染树直接把页面绘制到屏幕上.

