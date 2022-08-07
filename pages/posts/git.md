---
title: git常用操作总结
date: 2021-06-17
description: Git
weight: 2
tags:
 - git
categories: 
 - 其他
---

## clone
``` console
# 克隆远程master分支到本地
git clone <origin-url>

# -b:克隆远程指定分支到本地
git clone -b <origin-branch> <origin-url> 
```

## 删除分支

``` console
# 删除本地分支
git branch -d <branch-name>

# 删除远程分支
git push origin --delete <branch-name>
```

## stash
``` console
> stash用于跨分支保存和恢复修改记录
# 保存
git stash save <message>
# 查看保存列表
git stash list
stash@{0}: On master: test
# 恢复修改，可以跨分支
git stash pop stash@{0}
```

## push
```sh
# 强制push
git push origin master -f
```



## 远程仓库

```console
# 查看远程仓库
git remote -v

# 设置远程仓库
git remote add origin <origin-url>

# 修改远程仓库
git remote set-url origin <origin-url>
```

## git config
```console
vim .git/config
```
> 设置仓库用户名
``` config
[user]
        name = <username>
        email = <email>
```

> 本地保存登录信息
``` config
[credential]
        helper = store
```

## cherry-pick
> 用于跨分支转移commit

*将指定的commit提交到当前分支*

``` console
git cherry-pick <commit-id>
```

*将[commitA,commitB]之间的所有commit提交到当前分支*

``` console
git cherry-pick <commitA-id>^..<commitB-id>
```

*参数*

-x 在提交信息的末尾追加一行`(cherry picked from commit ...)`，方便以后查到这个提交是如何产生的。


