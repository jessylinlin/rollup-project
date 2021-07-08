//node环境中
import json from 'rollup-plugin-json'
//告诉 Rollup 如何查找外部模块
import resolve from 'rollup-plugin-node-resolve'
//commonjs
import cjs from 'rollup-plugin-commonjs'

export default {
    // input: 'src/index.js',
    input: {
        foo: './src/chunks/index.js',
        bar: './src/chunks/album.js'
    }, //多入口打包，修改为数组或者对象
    //object | array
    output: {
        // file: 'dist/bundle.js',
        // format: 'iife'
        //多文件
        dir: 'dist',
        format: 'amd'
    },
    //将调用结果放入
    plugins: [
        json(),
        resolve(),
        cjs()
    ]
}