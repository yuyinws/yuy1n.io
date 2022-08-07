---
title: php执行时间太长导致502 Bad GateWay错误
date: 2020-12-24
tags:
 - PHP
 - backend
categories: 
 - 后端
---
### 错误描述
在某个项目中导出Excel表格文件时由于数据量多，请求时间较长，当请求时间超过php设置的限制时间时就会导致502错误。
<!-- more -->
### 解决方法
修改下面两个文件内容
``` conf
#php.ini，单位秒
...
max_execution_time = 3000
...

#php-fpm.conf,单位秒
request_terminate_timeout = 600
```
之后重启php-fpm服务
