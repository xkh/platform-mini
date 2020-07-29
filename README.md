<!--
 * @Autor: xkh
 * @Date: 2020-07-27 18:55:19
 * @LastEditors: xkh
 * @LastEditTime: 2020-07-27 19:11:27
-->

English | [简体中文](./README_zh.md)

# preload-all

> Preload all resources，image、js、css... Super small size `1.7K`

> Support multi-format resource loading and automatic suffix recognition. It is recommended to carry the value of type type to reduce the loading time.
> return `Promise`, Usage examples adopt `.then .catch`, Of course you can use it`async await`.

## Install

```bash
npm i preload-all --save
```

## Options

| param  | desc                                         | values          | type     | must |
| ------ | -------------------------------------------- | --------------- | -------- | ---- |
| links  | resource list                                | []              | string[] | yes  |
| type   | resource type                                | image/js/css/'' | string   | no   |
| ignore | Ignore loading exception resources           | true/false      | boolean  | no   |
| retry  | Number of failed retries of resource loading | 0               | number   | no   |

## Usage

#### First

```bash
import {preloadAll} from 'preload-all';
```

#### Preload all resource

```bash
preloadAll({
    links: [
        "https://xxx01.jpg",        //Image
        "https://xxx02.js",         //Js
        "https://xxx03.css",        //Css
    ]
}).then((res)=>{
    //todo success
}).catch((error)=>{
    //todo fail
})
```

#### Preload Image

```bash
preloadAll({
    links: [
        "https://xxx01.jpg",
        "https://xxx02.png",
        "https://xxx03.gif",
    ],
    type: 'image'
})
```

#### Preload Js

```bash
preloadAll({
    links: [
        "https://xxx01.js",
        "https://xxx02.js",
        "https://xxx03.js",
    ],
    type: 'js'
})
```

#### Preload Css

```bash
preloadAll({
    links: [
        "https://xxx01.css",
        "https://xxx02.css",
        "https://xxx03.css",
    ],
    type: 'css'
})
```
