/*
 * @Author: your name
 * @Date: 2021-07-05 22:46:17
 * @LastEditTime: 2021-07-05 22:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\es\require\循环引用\c.js
 */
let a = require('./a.js')
console.log('c.js-1', '执行没完毕', a.done)
let b = require('./b.js')

console.log('c.js-1', '执行完毕', a.done, b.done)