---
title: WSL2设置clash代理
date: 2022-03-06
description: 让WSL2走Windows clash代理
tags:
 - clash
---

## windows clash设置

>  [clash core](https://github.com/Dreamacro/clash) + [yacd](https://github.com/haishanh/yacd)

1. 构建 [yacd](https://github.com/haishanh/yacd)，将构建产物放到clash配置文件夹中并重命名为`ui`。增加以下配置到config.yaml文件中

   ``` yaml
   external-ui: ui
   ```

2. 设置clash core自启动，创建一个vbs文件，内容如下：

   ```
   Dim WShell
   Set WShell = CreateObject("WScript.Shell")
   WShell.Run "D:\program\clash-windows-386.exe", 0
   Set WShell = Nothing
   ```
   
   `win`+`R`,输入`shell:startup`打开启动目录
   
   将vbs文件放到该目录即可实现开机自启clash core
   
3. 通过访问`http://127.0.0.1:9090/ui/`打开clash面板

## WSL2代理设置

1.找到WSL2与windows通信的IP

```shell
cat /etc/resolv.conf

# nameserver 172.x.x.x

export ALL_PROXY="http://172.x.x.x:7890"
```

2.由于这个Ip是动态生成的，可以写一个脚本动态获取

```shell
#set_proxy.sh

#!/bin/bash
host_ip=$(cat /etc/resolv.conf |grep "nameserver" |cut -f 2 -d " ")
export ALL_PROXY="http://$host_ip:7890"
```

3.再将这个脚本放到.zshrc中

```shell
#.zshrc

source ~/script/set_proxy.sh
```

