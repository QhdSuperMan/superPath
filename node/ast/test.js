/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-01-20 16:19:38
 * @LastEditTime: 2022-01-20 16:25:56
 * @info: 描述
 */
// 给你一把"螺丝刀"——recast
const recast = require("recast");

// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const code = `
  var a = { b: {c: {}} }
  a.b.c = 1
  `;
// 用螺丝刀解析机器
const ast = recast.parse(code);

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数

console.log(ast);
console.log(ast);
