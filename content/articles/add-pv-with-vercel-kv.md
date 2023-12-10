---
title: 使用 Vercel Storage 给Astro站点添加浏览量统计功能
date: 2023-05-23
pageName: articles
layout: article
---

## Vercel Storage

目前`Vercel Storage`一共有四种类型：

- Edge Config：以key-value形式存储的配置文件，用于边缘函数在运行时以环境变量的方式获取。
- KV：基于Redis的存储方案。
- Postgres：基于Postgre SQL的Serverless数据库。
- Blob：`Fast object storage`, 暂未开放。

![image-20230523155000808](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2023/05/upgit_20230523_1684828200.png)

这里选用`KV`来实现网站浏览量统计（PV）的功能。



## 具体实现

### Astro 配置

由于后续会用到Astro的**服务器渲染（SSR**与**API端点**，因此需要在`astro.config.mjs`文件中进行如下配置：

```js[astro.config.mjs]
import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'

export default defineConfig({
  output: 'server',
  	adapter: netlify(),
})
```

> 其中adapter可以自己任意选择

### 逻辑

Redis的数据是以key-value格式存储的，因此可以将网站的完整URL作为key，浏览量作为value。利用Redis的`INCR`命令，可以将指定的key值加1并返回新的key值，如果key值不存在，则会将 key 的值设置为0，然后再进行加1操作。

因此，只要在每次进入一个页面后，将页面的URL作为key值，去进行`INCR`操作，再获取到新的浏览量值即可。

### 服务端

Vercel官方发布的npm包[@vercel/kv](https://vercel.com/docs/storage/vercel-kv/kv-reference)中已经封装好了对Redis各种操作的API，直接使用即可。这里给每个key加上`PV_`的前缀，方便后续统一查看与统计。

在`src/pages/api`文件夹下新建一个`setPV.ts`文件，具体代码如下：

```ts [setPV.ts]
import type { APIRoute } from 'astro'
import { createClient } from '@vercel/kv'

const KV_REST_API_URL = import.meta.env.KV_REST_API_URL
const KV_REST_API_TOKEN = import.meta.env.KV_REST_API_TOKEN

export const get: APIRoute = async (ctx) => {
  try {
    if (!KV_REST_API_URL || !KV_REST_API_TOKEN)
      throw new Error('missing env')

    const v = ctx.url.searchParams.get('v') || '404'
    const client = createClient({
      url: KV_REST_API_URL,
      token: KV_REST_API_TOKEN
    })

    const number = await client.incr(`PV_${v}`)
    return {
      body: JSON.stringify({
        state: 'ok',
        message: number
      })
    }
  }
  catch (error) {
    return {
      body: JSON.stringify({
        state: 'fail',
        message: error
      })
    }
  }
}
```

### 客户端代码

在你需要统计的页面中添加以下脚本，其中`#pv-count`是显示浏览量统计的DOM元素:

```html
    <script>
      (async () => {
        const pvUrl = `/api/setPV?v=${encodeURIComponent(
          window.location.href
        )}`;

        const rawData = await fetch(pvUrl);
        const jsonData = await rawData.json();
        document.querySelector('#pv-count')!.innerHTML = jsonData.message + ' views'
      })()
    </script>
```

## 查看Redis数据

在Vercel的KV Storage页面有一个交互式的CLI，可以直接输入Redis的相关命令来查看Redis中的数据

![image-20230523164811977](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2023/05/upgit_20230523_1684831692.png)
