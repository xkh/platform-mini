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
        input: 'src/preloadAll.js',
        output: {
            name: 'preload-all',
            file: pkg.browser,
            format: 'umd',
        },
        plugins: [
            resolve(), // so Rollup can find `ms`
            commonjs(), // so Rollup can convert `ms` to an ES module
            process.env.NODE_ENV === 'production' && terser(),
        ],
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    // {
    //     input: 'src/preloadAll.js',
    //     // external: ['排除第三方'],
    //     output: [
    //         { file: pkg.main, format: 'cjs' },
    //         { file: pkg.module, format: 'es' },
    //     ],
    // },
];
