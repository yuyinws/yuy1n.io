---
pageName: articles
layout: article
title: Enable Vue devtools in Production
date: 2023-03-25
ogImage:
  component: NuxtSeo
---

1. Press <kbd>F12</kbd> to open devtool console page.
2. Execute following code:

**Vue2.x**

```js
const app = Array.from(document.querySelector('*')).find(
  e => e.__vue__
).__vue__
const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__
const Vue = Object.getPrototypeOf(app).constructor
while (Vue.super)
  Vue = Vue.super

Vue.config.devtools = true
devtools.emit('init', Vue)
```

**Vue3.x**

```js
const app = Array.from(document.querySelector('*')).find(
  e => e.__vue_app__
).__vue_app__
const version = app.version
const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__
devtools.enabled = true
devtools.emit('app:init', app, version, {})
```


3. Press <kbd>Option/Alt</kbd> + <kbd>R</kbd> to refresh the devtool, now you can see the `Vue` tab is show.

Or install Chrome extension [Vue force dev](https://chrome.google.com/webstore/detail/vue-force-dev/oohfffedbkbjnbpbbedapppafmlnccmb)
