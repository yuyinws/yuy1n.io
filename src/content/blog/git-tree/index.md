---
title: "一种以树状结构管理本地 Git 仓库的思路"
summary: ""
date: "2024-02-02"
tags:
- Git
---

## 现状

作为软件开发人员，git clone可以说是最常用的命令之一，随着本地 git 仓库的越来越多，不知道大家是如果对其进行管理的。可能大部分人只是简单创建了一个名称类似Developer或者Projects的文件夹，然后把所有仓库都放在里面。

随着仓库越来越多，这种原始的方法导致的问题有：

1. 难以快速找到一个 git 仓库

2. 可能会遇到重名的问题。比如很多组织下都会一个 docs 仓库（ vuejs/docs;unplugin/docs ）。

## 什么是树状结构

一句话概括，就是将一个 git 仓库以<远程地址>/<所有者>/<仓库名>的文件夹结构进行存储。

比如在 clone 这个仓库时 https://github.com/vuejs/docs

通过输入以下命令，就能实现树状结构管理

```shell
git clone https://github.com/vuejs/docs.git ~/Projects/github/vuejs/docs
```

但这种方式带来的问题是每次 clone 时都会有心智负担，需要手动补全路径。

## 介绍 Gitrees

Gitrees是一个命令行工具，通过简单的命令就能实现以上效果

![demo](https://cdn.jsdelivr.net/gh/yuyinws/static@master/2024/01/upgit_20240124_1706060562.gif)

## 基本用法

### 安装

```shell
npm install -g gitrees
```

### 初始化配置文件

```shell
gt init
```

这个命令会自动在用户目录生成一个 json 配置文件:

```json
{
  // 远程仓库地址的别名
  "alias": {
    "github.com": "github",
    "gitlab.com": "gitlab",
    "you-company.com": "company"
  },
  // 存储所有本地 git 仓库的根目录
  "root": "/Users/hostname/Projects"
}
```

clone 仓库

```shell
gt clone https://github.com/vuejs/core.git
```

会自动转化为：

```shell
git clone https://github.com/vuejs/core.git /Users/hostname/Projects/github/vuejs/core
```

## 最佳实践

经过个人一段时间的实践体验下来，这种树状结构带来的问题是仓库的层级太深，有时在查找一个仓库时需要 cd 好多次，通过搭配 zsh 的插件z可以快速定位到一个仓库，能在一定程度上解决这个问题。

> Gitrees 开源仓库：https://github.com/yuyinws/gitrees
