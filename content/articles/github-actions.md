---
external: false
title: github actions配置备份
date: 2022-01-20
---

## NodeJS

> 适用于 Hexo，Vue 等框架

```yaml
name: Deploy GitHub Pages

# 触发条件：在 push 到 master 分支后
on:
  push:
    branches:
      - hexo
# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 生成静态文件
      - name: Build
        run: |
          yarn install
          yarn build

      # 部署到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: ./public
```

## hugo
```yaml
name: hugo-deploy # 名字自取

on:
  push:
    branches:
      - hugo

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          # extended: true

      - name: Build
        run: hugo --minify # 使用hugo构建静态网页

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3 # 一个自动发布github pages的action
        with:
          external_repository: yuyinws/yuyinws.github.io
          personal_token: ${{ secrets.ACCESS_TOKEN }}
          publish_dir: ./public
          publish_branch: gh-pages-hugo
```
