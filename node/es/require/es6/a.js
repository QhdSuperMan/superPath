/*
 * @Author: your name
 * @Date: 2021-07-05 22:55:32
 * @LastEditTime: 2021-07-05 23:03:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\es\require\es6循环引用\a.js
 */
import {bar} from './b.js';
export function foo() {
  console.log('foo');
  bar();
  console.log('执行完毕');
}
foo();