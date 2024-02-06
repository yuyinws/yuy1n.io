---
pageName: articles
layout: article
title: 如何使用Cloudflare Workers
date: 2023-04-16
ogImage:
  component: NuxtSeo
---

## 什么是Cloudflare Workers
`Cloudflare Workers`是Cloudflare推出的Serverless服务，允许用户在云端运行JavaScript，并通过`Edge Function`进行响应，从而具有卓越的性能。

## 快速创建一个Worker

1. 点击`创建服务`。

![image-20230416112655567](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2023/04/upgit_20230416_1681615639.png)

2. 填写一个服务名称，输入要部署的JavaScript代码，点击`创建服务`。![image-20230416112902908](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2023/04/upgit_20230416_1681615768.png)

## 修改Worker代码

### 通过dashboard修改

在Worker的详情中，点击`快速编辑`即可在线编辑代码。

![image-20230416113415030](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2023/04/upgit_20230416_1681616055.png)

### 使用Nitro+Wrangler CLI开发

1. 新建一个[Nitro 项目](https://nitro.unjs.io/guide/getting-started)

2. 在Nitro项目中安装`wrangler cli`

   ```shell
   pnpm i -D wrangler
   ```

3. 新建`wrangler.toml`文件，其中的`name`字段与Work的服务名称要保持一致

   ```toml
   name = "workers-name"
   main = "./.output/server/index.mjs"
   workers_dev = true
   compatibility_date = "2023-03-20"
   
   [site]
   bucket = ".output/public"
   ```

4. 在`package.json`中新增一条script

   ```json
     "scripts": {
       "pub": "NITRO_PRESET=cloudflare npm run build && wrangler publish"
     },
   ```
   
   运行`pnpm pub`即可重新部署Work.



## 自定义Works域名

在`服务详情`-`触发器`中，可以找到`自定义域`和`路由`配置。

![image-20230416133609646](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2023/04/upgit_20230416_1681633520.png)

> 仅支持托管在Cloudflare下的域名。
