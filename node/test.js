/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-02-14 09:37:20
 * @LastEditTime: 2022-02-14 09:37:52
 * @info: 描述
 */

console.log(111);
setImmediate(function immediate () {
  console.log('immediate');
},0);
setTimeout(function timeout () {
  console.log('timeout');
},0);
