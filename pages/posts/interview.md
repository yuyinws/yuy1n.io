---
title: 前端面试题汇总
date: 2021-05-31
tags:
 - JavaScript
 - frontend
categories: 
 - 前端
---
> 记录一下面试题
## JS
### 作用域链
作用域链分为函数作用域和全局作用域
父作用域不能访问子作用域的变量
子作用域如果在当前作用域中没有查到值，就会向父级作用域去一级一级往上查询，这个查询形成的链条就是作用域链
### es6特性
- 箭头函数
- 模块化(export/import)
- 模板字符串
  ``` js
  let name = 'Tom'
  console.log(`my name is${name}`)
  ```
- 解构语法
- 拓展运算符
- let const
  let用于定义变量，使用let定义的变量不会进行变量提升。   
  const用于定义常量。const定义的对象可以修改对象的value值，不能修改对象的key值
- Promise
  
### 数组如何去重
- 使用ES6新增的Set数据结构
``` js
let oldArr = [0,0,1,2,1,3]
let newArr = [...new Set(oldArr)]
```
- for循环+indexOf
``` js
const unique = (arr) => {
    let newArr = []
    arr.forEach((item) => {
        if(newArr.indexOf(item) == -1){
            newArr.push(item)
        }
    })
    return newArr
}
```
### js有哪些数据类型
- 基本数据类型   
  String;Number;Boolean;Undefined;Null;Bigint;Symbol
- 引用数据类型
  Object;Array;Date;Function;RegExp
### 宏任务与微任务
- 宏任务与微任务都是异步任务  
- 宏任务是由浏览器发起的，微任务是由ECMAScript发起的  
- 宏任务:setTimeout,setInterval,ajax,DOM事件  
- 微任务:Promise,async/await  
- 微任务的执行时机比宏任务早
### 什么是Event Loop
- JavaScript是单线程的，同一时间只能执行一个任务。所有的任务分为同步任务和异步任务。  
所有的同步任务在主线程上依次执行，形成一个执行栈。  
所有的异步任务都会依次加入到“任务队列(task queue)”中  
当执行栈中的同步任务空了之后，系统会将“任务队列”中异步任务加入到执行栈中执行。  
主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。
### 数组的操作有哪些
push();pop();shift();unshift()  
forEach();map();some();every()
### 如何在不引入第三个变量的情况下交换2个变量值
使用ES6解构语法
``` js
let a = 1;
let b = 2;
[a,b] = [b,a]
```
### 判断变量类型的方法
- typeOf
  用于判断“undefined”、“Boolean”、“String”、“Number”、“Function”;判断Object、Array、null都会返回Object  
- instanceof
  instanceof用于判断引用类型变量，如Object，Array，Date
## Vue
### 父组件和子组件的钩子函数执行顺序
### v-if和v-show的区别
### vue有几种路由模式
### watch和computed的区别
### vue自定义指令
### v-for key的作用
### 如何向data中的对象增加一个属性
### vue2的数据劫持原理
### nextTick的用法
### 父子组件如何传参
### vuex的用法
### v-model是什么的语法糖
### beforeDestory里面一般做哪些操作
### Vue中的data为什么要用函数

## CSS
### css 让一个元素左右垂直居中
### css画一个三角形

## other
### 前端如何进行性能优化
### 在浏览器地址栏输入url，按下回车后发生了什么