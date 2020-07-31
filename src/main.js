/*
 * @Autor: xkh
 * @Date: 2020-07-31 20:24:11
 * @LastEditors: xkh
 * @LastEditTime: 2020-07-31 20:47:26
 */

/**
 * 最轻量的获取平台信息
 * @return { Object }
 */

const ua = navigator.userAgent.toLowerCase();
const platform = {};
const MAP_EXP = {
    Weixin: /micromessenger/i,
    Mac: /(mac os x)\s+([\w_]+)/,
    Windows: /(windows nt)\s+([\w.]+)/,
    Ios: /(i(?:pad|phone|pod))(?:.*)cpu(?: i(?:pad|phone|pod))? os (\d+(?:[\.|_]\d+){1,})/,
    Android: /(android)\s+([\d.]+)/,
    Ipad: /(ipad).*os\s([\d_]+)/,
    Iphone: /(iphone\sos)\s([\d_]+)/,
};
for (let key in MAP_EXP) {
    const uaMatch = ua.match(MAP_EXP[key]);
    platform[`is${key}`] = !!uaMatch;
    if (!!uaMatch && !platform.version) {
        platform.version = key === 'Ios' ? uaMatch[2].replace(/_/g, '.') : uaMatch[2];
    }
}

export { platform };
