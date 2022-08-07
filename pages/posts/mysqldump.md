---
title: 使用Crontab和MySQLdump实现每日自动备份数据库
date: 2020-06-03
sidebarDepth: 0
description: Crontab+MySQLdump
tags:
 - Linux
 - MySQL
categories: 
 - Linux
---
## mysqldump
mysqldump是MySQL自带的一个备份命令，可以将整个数据库备份成一个sql文件，文件内部都是sql语句。
``` sh
#基本语法
mysqldump -u(用户名) -p(密码) (数据库名) > backup.sql 
```
## 编写shell脚本
``` sh
#!/bin/bash
#备份文件夹路径
bakdir=/root/data/backup
#获取日期
d=`date +%F`
#指定要备份的数据库，这里只指定了一个app数据库
for db in app
do
    mysqldump -uroot -ppassword $db > $bakdir/$db\_$d.sql
done
cd $bakdir
#将备份的sql文件打包以减小占用空间
gzip *_$d.sql
#删除时间超过30天的备份文件
find ./ -name "*.gz" -mtime +30 |xargs rm
```
## crontab
``` bash
#管理crontab服务状态
systemctl status/stop/start crond
#编辑定时项目,编辑方式与vim相同
crontab -e
#创建一条定时任务,每天的凌晨3点30分执行指定脚本
30 3 * * * /bin/bash ****.sh
```