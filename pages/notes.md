---
title: Notes - YuYinWS
display: Notes
---

{toc}

## Vue生产环境开启DevTools
```js
// Vue2.x
let Vue, walker, node; 
walker = document.createTreeWalker(document.body, 1); 
while ((node = walker.nextNode())) { 
	if (node.__vue__) { 
		Vue = node.__vue__.$options._base; 
		if (!Vue.config.devtools) { 
			Vue.config.devtools = true; 
			if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__){
				window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init", Vue);
			} 
		} 
		break; 
	} 
}

// Vue3.x
let vue, node, walker; 
walker = document.createTreeWalker(document.body, 1); 
while ((node = walker.nextNode())) { 
  if (node.__vue_app__) { 
    vue = node.__vue_app__; 
     if (!vue.config.devtools) { 
      vue.config.devtools = true; 
       if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("app:init", vue,vue.version,{
          Fragment: 'Fragment',
          Text: 'Text',
          Comment: 'Comment',
          Static: 'Static'
        });
      } 
   } 
   break; 
 } 
}
```

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

