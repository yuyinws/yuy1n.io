---
title: centos7下yum安装nginx
date: 2020-12-21
sidebarDepth: 0
tags:
 - Linux
 - nginx
categories: 
 - Linux
---

通过添加yum源的方式安装nginx
<!-- more -->
``` sh
vim /etc/yum.repos.d/nginx.repo
#输入以下内容
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

``` sh
#下载nginx
yum install nginx
#启动/关闭/重启nginx
service nginx start/stop/restart
#查看nginx状态
service nginx status
```