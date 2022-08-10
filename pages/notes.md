---
title: Notes - YuYinWS
display: Notes
---

## shamefully-hoist
> pnpm官方提供的.npmrc配置项，当pnpm运行报错时配上这个一般就可以解决
```
#.npmrc
shamefully-hoist=true
```

## transform 实现水平垂直居中

```html
<body>
  <div class="card">
    <div class="item">水平垂直居中</div>
  </div>
</body>
<style>
  .card {
    position: relative;
    height: 500px;
    width: 500px;
    border: 1px solid red;
  }

  .item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
  }
</style>
```

## create-vue

```
# vite创建Vue3项目项目
pnpm create vue@3
```

