<!--
 * @Autor: xkh
 * @Date: 2020-07-27 18:55:19
 * @LastEditors: xkh
 * @LastEditTime: 2020-07-27 19:11:27
-->

# preload-all

> Preload all resources，image、js、css...；
> Support multi-format resource loading and automatic suffix recognition;It is recommended to carry the value of type type to reduce the loading time.
> return Promise

### Install

```
npm i preload-all --save
```

### Usage

return `Promise`，Usage examples adopt `.then().catch()`，Of course you can use it`async() await()`；

#### Reference

```
import {preloadAll} from 'preload-all';
```

#### Preload image

```
preloadAll({
    links: [
        "https://xxx01.jpg",
        "https://xxx02.png",
        "https://xxx03.jpg",
    ],
    type: 'image'
}).then(({success})=>{
    if(success){
        //所有资源加载完成
    }else{
        //资源加载异常
    }
}).catch(()=>{})
```

#### Preload js

```
preloadAll({
    links: [
        "https://xxx01.js",
        "https://xxx02.js",
        "https://xxx03.js",
    ],
    type: 'js'
})
```

#### Preload css

```
preloadAll({
    links: [
        "https://xxx01.css",
        "https://xxx02.css",
        "https://xxx03.css",
    ],
    type: 'css'
})
```

### Preload all resource

```
preloadAll({
    links: [
        "https://xxx01.jpg",        //图片
        "https://xxx02.js",         //js
        "https://xxx03.css",        //css
    ],
    type: 'css'
})
```
