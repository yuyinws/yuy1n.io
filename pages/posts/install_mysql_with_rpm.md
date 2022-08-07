---
title: CentOS7下使用rpm包安装MySQL
date: 2020-12-24
sidebarDepth: 0
description: 使用rpm包安装mysql
tags:
 - Linux
 - MySQL
categories: 
 - Linux
---

### 下载rpm包
``` sh
wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.32-1.el7.x86_64.rpm-bundle.tar
```
### 解压
``` sh
tar -xvf mysql-5.7.32-1.el7.x86_64.rpm-bundle.tar

mysql-community-client-5.7.32-1.el7.x86_64.rpm
mysql-community-common-5.7.32-1.el7.x86_64.rpm
mysql-community-devel-5.7.32-1.el7.x86_64.rpm
mysql-community-embedded-5.7.32-1.el7.x86_64.rpm
mysql-community-embedded-compat-5.7.32-1.el7.x86_64.rpm
mysql-community-embedded-devel-5.7.32-1.el7.x86_64.rpm
mysql-community-libs-5.7.32-1.el7.x86_64.rpm
mysql-community-libs-compat-5.7.32-1.el7.x86_64.rpm
mysql-community-server-5.7.32-1.el7.x86_64.rpm
mysql-community-test-5.7.32-1.el7.x86_64.rpm
``` 
## 安装
``` sh
yum install -y mysql-community-*.rpm
```
## 初始化
### 开启服务
``` sh
service mysqld start
```
### 记录下随机密码
``` sh
grep 'temporary password' /var/log/mysqld.log

2020-12-25T03:38:05.302781Z 1 [Note] A temporary password is generated for root@localhost: cqU?bpQ3BFM.
```
### 连接数据库
``` sh
mysql -u root -p
```
输入刚才记录的密码
### 修改密码
必须修改密码之后才可以进行其他数据库操作
``` mysql
alter user user() identified by 'password';
```