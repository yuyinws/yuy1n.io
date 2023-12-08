---
external: false
title: Git多用户管理
date: 2022-08-28
---

## 使用场景

有时我们需要往多个不同的Git远程地址推送代码，比如Github、Gitlab或公司自建的Git。这时候就需要用到Git多用户管理的功能。



## 配置方法

使用Git自带的`includeIf`配置实现

### 根据文件夹区分用户

**.gitconfig**

```
[includeIf "gitdir:~/github/"]
       path = .gitconfig-github
[includeIf "gitdir:~/gitlab/"]
       path = .gitconfig-gitlab       
```

> 针对`～/github/`目录下的仓库，使用`.gitconfig-github`配置文件
>
> 针对`～/gitlab/`目录下的仓库，使用`.gitconfig-gitlab`配置文件

### 根据远程地址区分用户

**.gitconfig**

```
[includeIf "hasconfig:remote.*.url:https://github.com/**"]
       path = .gitconfig-github
[includeIf "hasconfig:remote.*.url:https://gitlab.com/**"]
       path = .gitconfig-gitlab   
```

> **此配置需要Git版本>=2.3.6**
>
> 针对`github.com`远程地址仓库，使用`.gitconfig-github`配置文件
>
> 针对`gitlab.com`目录下的仓库，使用`.gitconfig-gitlab`配置文件
