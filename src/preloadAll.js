/**
 * 预加载 多种资源
 * @param { Object } options  配置参数
 * @param { Object[] } options.links 资源列表类型
 * @param { string } options.type [default = ''] [type = 'image' | 'js' | 'css'] 资源类型
 * @param { boolean } options.ignore [default = false] 是否忽略加载异常资源
 * @param { number } options.retry [default = 0] 资源加载失败重试次数
 * @return { Promise({success, code, msg}) }
 */

export const preloadAll = (options) => {
    const { links = [], type, ignore = false, retry = 0 } = options;

    let scriptSrc = []; //当前已加载js资源
    let cssSrc = []; //当前已加载css资源
    let retryCount = 0; //
    let newType = type;

    if (newType === 'js') {
        const scriptArr = document.getElementsByTagName('script');
        if (scriptArr && scriptArr.length) {
            for (let i = 0; i < scriptArr.length; i++) {
                scriptSrc.push(scriptArr[i].src);
            }
        }
    }

    if (newType === 'css') {
        const cssArr = document.getElementsByTagName('link');
        if (cssArr && cssArr.length) {
            for (let i = 0; i < cssArr.length; i++) {
                cssSrc.push(cssArr[i].href);
            }
        }
    }

    const onePreload = (url) => {
        return new Promise((resolve, reject) => {
            let resource = null;
            //type不存在 或 不在可用范围自动检查资源类型
            if (!['image', 'js', 'css'].includes(type)) {
                if (/.png|.jpg|.jpeg|.gif|.webp|^data:image\/jpg;base64,/.test(url)) {
                    newType = 'image';
                } else if (/.\.js$/.test(url)) {
                    newType = 'js';
                } else if (/.\.css$/.test(url)) {
                    newType = 'css';
                } else {
                    reject({
                        success: false,
                        code: 949001,
                        msg: 'Failed, format is not supported！！！',
                        link: url,
                    });
                }
            }

            if (newType === 'image') {
                resource = new Image();
                resource.src = url;
            }

            if (newType === 'js') {
                //判断当前js是否加载过
                if (scriptSrc.includes(url)) {
                    resolve({
                        success: true,
                        msg: 'Already loaded',
                        link: url,
                    });
                }
                resource = document.createElement('script');
                resource.type = 'text/javascript';
                resource.src = url;
                document.body.appendChild(resource);
            }

            if (newType === 'css') {
                //判断当前css是否加载过
                if (cssSrc.includes(url)) {
                    resolve({
                        success: true,
                        msg: 'Already loaded',
                        link: url,
                    });
                }
                resource = document.createElement('link');
                resource.type = 'text/css';
                resource.rel = 'stylesheet';
                resource.href = url;
                document.body.appendChild(resource);
            }

            resource.onload = () => {
                resolve({
                    success: true,
                    msg: 'Successfully',
                    link: url,
                });
            };
            resource.onerror = () => {
                if (ignore) {
                    resolve({
                        success: true,
                        msg: 'Loading failed, has been ignored',
                        link: url,
                    });
                } else if (retryCount < retry) {
                    retryCount++;
                    onePreload(url).then(() => {
                        retryCount = 0; //成功后初始化尝试次数
                        resolve({
                            success: true,
                            msg: 'Successfully loaded after Attempts to',
                            link: url,
                        });
                    });
                } else {
                    reject({
                        success: false,
                        code: 949002,
                        msg: 'Failed, you can configure 【ignore: true】！！！',
                        link: url,
                    });
                }
            };
        });
    };
    const promiseArr = links.map((i) => onePreload(i));
    return Promise.all(promiseArr);
};
