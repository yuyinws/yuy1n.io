---
pageName: articles
layout: article
title: ES6+
date: 2021-11-29
---

## 变量赋值

``` js
const person = {
  name: 'lyc',
  userPic: 'asd98121sdds.png',
  age: 23
}

// bad
const name = person.name
const avatar = person.userPic
const age = person.age

// good
const { name, userPic: avatar, age } = obj || {}
```

> ES6的解构赋值虽然好用。但是要注意解构的对象不能为`undefined`、`null`。否则会报错，故要给被解构的对象一个默认值。

## 变量合并

```js
const array1 = [1, 2, 3]
const array2 = [2, 3, 4]

const params1 = {
  age: 23
}
const params2 = {
  page: 1,
  size: 10
}

// bad
const array3 = array1.concat(array2)
const params = Object.assign({}, params1, params2)

// good
const array3 = [...array1, ...array2]
const params = { ...params1, ...params2 }
```

> 如果数组需要去重
>
> ```js
> const array3 = [...new Set(...array1, ...array2)]
> ```



## 多个if或条件判断(array.includes)

```js
// bad
if ( status === 'start' || status === 'loading' || status === 'end') {
    ....
}

// good
if (['start','loading','end'].includes(status)) {
    ...
}
```

## 获取对象属性值(?.)

``` js
const order = {
  appUserBaseDO: {
    nickName: 'lyc'
  }
}

// 假设order是异步获取的，且里面的值需要在Vue Template中渲染

// bad,由于order一开始为空，会报错
{ { order.appUserBaseDO.nickName } }

// good
{ { order?.appUserBaseDO?.nickName } }
```

