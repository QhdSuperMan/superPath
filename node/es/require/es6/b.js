/*
 * @Author: your name
 * @Date: 2021-07-05 22:57:10
 * @LastEditTime: 2021-07-05 22:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\es\require\es6循环引用\b.js
 */
import {foo} from './a.js';
export function bar() {
  console.log('bar');
  if (Math.random() > 0.5) {
    foo();
  }
}