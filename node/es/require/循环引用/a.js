/*
 * @Author: your name
 * @Date: 2021-07-05 22:45:49
 * @LastEditTime: 2021-07-05 22:45:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\es\require\循环引用\a.js
 */
exports.done = false
let b = require('./b.js')
console.log('a.js-1', b.done)
exports.done = true
console.log('a.js-2', '执行完毕')