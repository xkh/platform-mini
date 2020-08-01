/*
 * @Autor: xkh
 * @Date: 2020-07-27 18:55:19
 * @LastEditors: xkh
 * @LastEditTime: 2020-07-27 19:02:15
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

export default [
    // browser-friendly UMD build
    {
        input: 'src/main.js',
        output: {
            name: 'platform-mini',
            file: pkg.browser,
            format: 'umd',
        },
        plugins: [
            resolve(), // so Rollup can find `ms`
            commonjs(), // so Rollup can convert `ms` to an ES module
            process.env.NODE_ENV === 'production' && terser(),
        ],
    },
];
