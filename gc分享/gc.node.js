// node  --expose-gc ./gc.node.js

global.gc();
console.log('内存1', process.memoryUsage().heapUsed); 

const wm = new WeakMap();
let key = new Array(5 * 1024 * 1024);
wm.set(key, 1);

global.gc();
console.log('内存2', process.memoryUsage().heapUsed);

key = null;
global.gc();
console.log('内存3', process.memoryUsage().heapUsed); 