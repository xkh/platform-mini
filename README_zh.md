<!--
 * @Autor: xkh
 * @Date: 2020-07-27 18:55:19
 * @LastEditors: xkh
 * @LastEditTime: 2020-07-27 19:30:19
-->

# preload-all

> 预加载所有资源，image、js、css...；
> 支持多格式资源同时加载自动后缀识别；推荐携带 type 类型值减少加载耗时；
> 返回`Promise`，用法示例采用`.then().catch()`，当然也可以使用`async() await()`；

## 安装

```
npm i preload-all --save
```

## 用法

#### 引用

```
import {preloadAll} from 'preload-all';
```

#### 混合资源预加载

```
preloadAll({
    links: [
        "https://xxx01.jpg",        //图片
        "https://xxx02.js",         //js
        "https://xxx03.css",        //css
    ],
    type: 'image'
}).then(({success})=>{
    if(success){
        //所有资源加载完成
    }else{
        //资源加载异常
    }
}).catch(()=>{
    //资源加载异常
})
```

#### 图片资源预加载

```
preloadAll({
    links: [
        "https://xxx01.jpg",
        "https://xxx02.png",
        "https://xxx03.gif",
    ],
})
```

#### Js 预加载

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

#### Css 预加载

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

## 参数配置

| 参数   | 描述                           | 值              | 类型     | 是否必须 |
| ------ | ------------------------------ | --------------- | -------- | -------- |
| links  | 资源列表                       | []              | string[] | yes      |
| type   | 资源类型（建议填写）           | image/js/css/'' | string   | no       |
| ignore | 是否忽略加载异常的资源继续执行 | true/false      | boolean  | no       |
| retry  | 资源加载异常重试几次           | 0               | number   | no       |
