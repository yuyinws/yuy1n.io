---
pageName: articles
layout: article
title: JavaScript函数return前包含异步代码的问题
date: 2023-05-17
ogImage:
  component: NuxtSeo
---

假设有下面这一段代码:
```js
function changeFoo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bar: 'bar'
      })
    }, 2000)
  })
}

function main() {
  let foo = 'foo'

  function otherFn() {
    changeFoo().then((res) => {
      foo = res.bar
    })
  }

  otherFn()

  return {
    foo
  }
}

console.log(main())
```
在`main`函数中，会在`otherFn`中调用一个`changeFoo`异步函数并将`foo`的值修改为异步函数的返回结果，然而我们在打印`main()`的时候会发现打印出的始终是原始值`{foo: 'foo'}`而不是`{foo: 'bar'}`.

解决方案:
```js
function changeFoo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bar: 'bar'
      })
    }, 2000)
  })
}

async function main() {
  let foo = 'foo'
  const asyncFns = []

  function otherFn() {
    const asyncFn = changeFoo().then((res) => {
      foo = res.bar
    })

    asyncFns.push(asyncFn)
  }

  otherFn()

  await Promise.all(asyncFns)

  return {
    foo
  }
}
main().then((res) => {
  console.log(res)
})
```

在main函数中新建一个存放异步函数的数组，在otherFn中将异步函数push到这个数组中，使用`Promise.all`来等待所有异步操作完成，最后再执行return.
