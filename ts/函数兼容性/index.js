/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-06-30 16:22:54
 * @LastEditTime: 2021-06-30 16:23:43
 * @info: 描述
 */
// 函数赋值  比较 参数类型
var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x; // OK
x = y; // Error x 中没有对于s类型的实现
