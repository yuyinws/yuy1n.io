---
title: 前端项目规范化改造
date: 2022-04-29
description: 前端项目增加Husky Eslint Prettier Commitizen
tags:
 - project
---

### 前言

前端项目的规范一般分为代码格式规范与Git commit规范，代码格式规范一般使用`Eslint`,`Prettier`来实现，git commit规范则使用`Commitizen`来实现。为了能在git hooks中自动执行这2个检查，又会引入`Husky`、`Lint-stage`和`commitlint`。它们之间的关系如下图：

![Snipaste_2022-08-08_21-40-11](https://s2.loli.net/2022/08/08/cXDAxIlbZL6jJNh.png)




本文对这几种工具的安装与联动进行了详细说明。

## Prettier

> [Prettier](https://www.prettier.cn/) 是一个流行代码格式化工具。

### 安装依赖

```
pnpm add -D prettier
```

### script

```json
{
    "script":{
        "format:code": "prettier --write \"src/**/*.(vue|js|ts|css|scss)\""
    }
}
```

### 配置文件

```js
// .prettierrc.js
module.exports = {
  printWidth: 80, // 换行字符串阈值
  tabWidth: 2, // 设置工具每一个水平缩进的空格数
  useTabs: false,
  semi: false, // 句末是否加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 用单引号
  trailingComma: 'none', // 最后一个对象元素加逗号
  bracketSpacing: true, // 对象，数组加空格
  arrowParens: 'always', // (x) => {} 是否要有小括号
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false // 不需要自动在文件开头插入 @prettier
};

```

## Eslint

> [Eslint](https://cn.eslint.org/)是一个可组装的JavaScript和JSX检查工具

### 安装依赖

```
pnpm add -D eslint @antfu/eslint-config
```

### 配置文件
.eslintrc
```
{
  "extends": "@antfu",
}
```



```js
// .eslintignore
# eslint 忽略检查 (根据项目需要自行添加)
node_modules
dist
```

## Commitizen

> Commitizen是一个辅助git commit填写的工具

### 依赖

```
pnpm add -D commitizen
```

### script

```json
{
    "script":{
        "cm": "git-cz",
    }
}
```

### 配置

在`package.json`中增加以下配置

```
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
```



## Husky

### 依赖

```
pnpm add -D husky
```

### script

```json
{
    "script":{
        "prepare": "husky install",
    }
}
```

### 配置文件

> 添加命令后，执行`pnpm prepare`会生一个`.husky`文件夹，在此文件夹下新增`commit-msg`和`pre-commit`2个文件。目录结构：
```
📦.husky
┣ 📂_
┃ ┣ 📜.gitignore
┃ ┗ 📜husky.sh
┣ 📜commit-msg
┗ 📜pre-commit
```


**commit-msg**

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

**pre-commit**

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged --allow-empty $1
```

> 如果在后续的git操作中看到如下提示：
>
> **The '.husky/commit-msg' hook was ignored because it's not set as executable**
>
> 说明需要赋予husky执行权限,执行以下命令。
>
> `sudo chmod +x .husky/*`

## Commitlint

> Commitlint 是一个git commit规范检测工具

### 依赖

```
pnpm add -D @commitlint/cli @commitlint/config-conventional @commitlint/cz-commitlint
```

### 配置

```js
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

## Lint-staged

> Lint-staged用于格式化与检查处于git暂存区的文件

### 依赖

```
npm add -D lint-staged
```

### 配置

在`package.json`中添加以下配置：

```json
 "lint-staged": {
    "src/**/*.{js,ts,jsx,tsx}": [
      "prettier --config .prettierrc.js --write",
      "node --max_old_space_size=8192 ./node_modules/eslint/bin/eslint.js --fix --color --cache --quiet",
      "git add"
    ],
    "*.vue": [
      "prettier --config .prettierrc.js --parser=vue --write",
      "node --max_old_space_size=8192 ./node_modules/eslint/bin/eslint.js --fix --color --cache --quiet",
      "git add"
    ],
    "*.{css,scss}": [
      "prettier --config .prettierrc.js --write",
      "git add"
    ]
  },
```



## 最终效果

1. 在VScode中能进行代码格式校验与格式化（需要安装相应工具的VScode插件）
2. 执行`pnpm cm`,能进行git commit辅助输入
3. 执行`git commit`后，能够自动格式化与检查暂存区的文件，如果有格式错误，则终止commit操作
