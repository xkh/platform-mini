

<!--
 * @Autor: xkh
 * @Date: 2020-07-27 18:55:19
 * @LastEditors: xkh
 * @LastEditTime: 2020-07-31 20:50:28
-->

# platform-mini

> 最轻量的解析 `userAgent`，得到必要的平台信息，大小 `746b` 不到 `1k`。😀

## Install

```bash
npm i platform-mini --save
```

## Usage

```bash
import { platform } from "platform-mini";

platform = {
    isAndroid: false,   //安卓系统
    isIos: true,        //ios系统
    isIpad: false,      //ipad
    isIphone: true,     //iphone
    isMac: false,       //mac平台
    isWindows: false,   //windows平台
    isWeixin: false,    //微信
    version: "13.2.3"   //系统版本号
}

```
