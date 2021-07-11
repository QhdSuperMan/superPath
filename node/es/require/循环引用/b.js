/*
 * @Author: your name
 * @Date: 2021-07-05 22:46:04
 * @LastEditTime: 2021-07-05 22:46:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\es\require\循环引用\b.js
 */
exports.done = false
let a = require('./a.js')
console.log('b.js-1', a.done)
exports.done = true
console.log('b.js-2', '执行完毕')