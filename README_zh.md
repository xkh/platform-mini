<!--
 * @Autor: xkh
 * @Date: 2020-07-27 18:55:19
 * @LastEditors: xkh
 * @LastEditTime: 2020-07-27 19:30:19
-->

# preload-all

> 预加载所有资源，image、js、css...；
> 支持多格式资源同时加载自动后缀识别；推荐携带 type 类型值减少加载耗时；
> 返回`Promise`

### 安装

```
npm i preload-all --save
```

### 用法

返回`Promise`，用法示例采用`.then().catch()`，当然也可以使用`async() await()`；

#### 引用

```
import {preloadAll} from 'preload-all';
```

#### 图片预加载

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

#### js 预加载

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

#### css 预加载

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

### 混合资源预加载

```
preloadAll({
    links: [
        "https://xxx01.jpg",        //图片
        "https://xxx02.js",         //js
        "https://xxx03.css",        //css
    ],
})
```
