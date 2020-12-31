const assert = require('assert').strict;
// try {
//   assert.equal(1, 1, '不相等')
// } catch (error) {
//   console.log(error)
// }
// try {
//   assert.deepEqual([[[1, 2, 0]], 4, 5], [[[1, 2, '3']], 4, 5], '不同');
// } catch (error) {
//   console.log(error)
// }

function err () {
  // new Error('报错啦')
}
try {
var a = assert.throws(err, ()=> true, '报错啦11111')
} catch (error) {
  console.log(error)
}
// console.log(a)