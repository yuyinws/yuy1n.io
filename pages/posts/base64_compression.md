---
title: 图片base64压缩
date: 2021-11-23
description: 压缩一个图片的base64编码
tags:
 - base64
 - JavaScript
categories: 
 - 前端
---

``` js
/* 
  base64图片压缩
  w:图片宽度
  quality：压缩系数，0-1之间
*/
export function cutImageBase64(base64, w, quality) {
  return new Promise((resolve, reject) => {
    let newImage = new Image()
    newImage.src = base64
    let imgWidth, imgHeight
    newImage.onload = function () {
      imgWidth = this.width
      imgHeight = this.height
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      if (Math.max(imgWidth, imgHeight) > w) {
        if (imgWidth > imgHeight) {
          canvas.width = w
          canvas.height = (w * imgHeight) / imgWidth
        } else {
          canvas.height = w
          canvas.width = (w * imgWidth) / imgHeight
        }
      } else {
        canvas.width = imgWidth
        canvas.height = imgHeight
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
      let base64 = canvas.toDataURL('image/jpeg', quality) //压缩语句
      resolve(base64)
    }
    newImage.onerror = function (err) {
      reject(err)
    }
  })
}

```