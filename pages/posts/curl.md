---
title: PHP cURL函数封装
date: 2021-01-22
tags: 
  - PHP
---

## CURL
> CURL是一个非常强大的开源库，支持很多协议，包括HTTP、FTP、TELNET等，可以使用cURL实现Get和Post请求的方法。!

## 应用场景
在开发过程中经常要向第三方服务器发送http请求，使用JS往往会遇到跨域问题，这时候就需要由本地服务器中的PHP向第三方发起http请求。

## 封装
``` php
/**
 * @author: yuyin
 * @param {*} string $url:请求地址
 * @param {*} array $head:请求头
 * @param {*} bool $isPost:是否是post请求
 * @param {*} array $params:请求参数
 * @return {*}
 * @Date: 2021-01-22 12:35:47
 */
function curl(string $url,array $head,bool $isPost,array $params){
    if(!$head){
        $head = array("Content-type:application/json;","Accept:application/json");
    }
    $ch = curl_init();  //初始化curl
    curl_setopt($ch,CURLOPT_HTTPHEADER,$head); //添加head
    if(!$isPost){
        $url = $url.'?'.http_build_query($params); //get请求，将参数拼接到url后面
    }else{
        $params = json_encode($params);   //post请求，将请求参数转化成json格式
        curl_setopt($ch, CURLOPT_POST, 1);  //声明是post请求
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params); //添加请求参数
    }
    curl_setopt($ch, CURLOPT_URL, $url); //添加url
    $response = curl_exec($ch);
    $curl_errno = curl_errno($ch);
    $curl_error = curl_error($ch);
    curl_close($ch);
    $response = json_decode($response,true);
    if ($curl_errno > 0) {
        echo "cURL Error ($curl_errno): $curl_error\n";
    } else {
        return $response;
    }
    
}
```
