---
title: hexo迁移至hugo
date: 2022-01-21
description: "记录一下博客从hexo迁移至hugo遇到的问题"
tags: 
  - blog
---





先说一下为啥要从hexo迁移至hugo，并不是因为hexo不好用，而是发现了hugo里[PaperMod](https://github.com/yuyinws/hugo-PaperMod)这个主题，很对我的审美，于是决定将站点从hexo迁移至hugo。



# 安装Hugo

由于我的开发环境为Ubuntu，一开始使用apt下载hugo，结果下载下来的版本太低，在后续遇到了许多问题。后面直接通过官方的[Release](https://github.com/gohugoio/hugo/releases)列表找到对应的版本进行安装。

``` sh
# 下载安装包
http --download https://github.com/gohugoio/hugo/releases/download/v0.92.0/hugo_0.92.0_Linux-64bit.deb

# 进行安装
sudo dpkg -i hugo_0.92.0_Linux-64bit.deb
```



# 生成站点

与Hexo类似，Hugo也是先用命令行初始化一个基础框架，然后再将一个主题源代码Clone至themes文件夹下，不同的是Hugo并没有提供一个默认的主题。

详细的操作可以看[官方文档](https://gohugo.io/getting-started/quick-start/)



# 文章迁移

Hugo的文章保存在`/content/post/`目录下，直接迁移至此处就行。

这里遇到了一个问题，之前在Hexo中某些markdown的`头部信息（Front Matter）`中有Cover字段,导致主题渲染报错,删去之后问题解决.



# Github Actions

之前的Hexo是用github actions自动部署的，于是找了一下hugo的action脚本，果然也有，详细可以看[这篇文章](/post/others/github-actions/#hugo)



# Hugo对比Hexo

## 运行环境

Hexo是基于NodeJS的，所以必须要安装NodeJS运行环境。而Hugo是用Golang开发，最终是一个二进制可执行文件，不需要用户安装Go运行环境。

## 编译速度

Hugo的介绍是`The world’s fastest framework for building websites.`这点确实名副其实。

在编译速度上，Hugo比Hexo要快出许多，不管是热重载以及打包，Hugo几乎可以在瞬间完成。

## 社区

由于种种原因，Hugo在国内的流行程度不及Hexo，但是在全球范围是应该是Hugo更加流行，这点可以从Github Star数看出来。

由于用户基础的不同，在国内，Hexo有完整的中文文档可以参考，Hugo的中文文档都是残缺不全的，在使用上会有一定的门槛。

# 最后

在使用PaperMod这款主题的时候，发现中文化不是很完善，于是提了一个PR。

