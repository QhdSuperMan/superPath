/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-04-15 11:31:02
 * @LastEditTime: 2021-04-15 11:31:21
 * @info: 描述
 */
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { 
  try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }