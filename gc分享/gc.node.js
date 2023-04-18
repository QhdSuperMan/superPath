/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-10-17 15:43:30
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-31 17:56:18
 */
// node  --expose-gc ./gc.node.js

global.gc();
console.log('内存1', process.memoryUsage().heapUsed); 

const wm = new Map();
let key = new Array(5 * 1024 * 1024);
wm.set(key, 1);

global.gc();
console.log('内存2', process.memoryUsage().heapUsed);

key = null;
console.log();
console.log('内存3', process.memoryUsage().heapUsed); 