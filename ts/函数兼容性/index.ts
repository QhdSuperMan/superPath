/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-06-30 16:22:54
 * @LastEditTime: 2021-06-30 16:23:43
 * @info: 描述
 */
// 函数赋值  比较 参数类型
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error x 中没有对于s类型的实现