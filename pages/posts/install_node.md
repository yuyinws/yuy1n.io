---
title: CentOS7使用shell脚本安装Node
date: 2021-01-13
description: 如何在CentOS7下安装Node
tags:
 - Node
 - SHELL
categories: 
 - 后端
---

脚本内容
``` shell
#!/bin/bash
#开始安装node...
yum install -y wget
wget -P /usr/local/ https://nodejs.org/dist/v14.15.4/node-v14.15.4-linux-x64.tar.xz
if [ $? -eq 0 ]; then
    echo "解压中......"
    tar -xvf /usr/local/node-v14.15.4-linux-x64.tar.xz -C /usr/local > /dev/null 2>&1
    mv /usr/local/node-v14.15.4-linux-x64/ /usr/local/nodejs/
        if [ $? -eq 0 ]; then
        echo 'export PATH=$PATH:/usr/local/nodejs/bin' >> /etc/profile
        source /etc/profile > /root/test.log
        printf 'node安装完成,使用以下指令进行使用\n'
        printf 'node -v\n'
        printf 'npm -v\n'
        printf 'npx -v\n'
        else
        echo "解压失败"
        fi
else
echo "下载node压缩包失败"
fi
```