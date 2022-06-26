/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-03-02 11:31:26
 * @LastEditTime: 2022-03-03 09:46:12
 * @info: 描述
 */
// var a = () => import('./globals.js')
// a().then((val, a, b, c) => {
//   console.log(val, a, b, c);
// })

// var b = import('./globals.js').then(val => {
//   console.log('s', import('./one'));
// })

require.ensure(
  [],
  function (require) {
    var a = require('./globals.js')
    var b = require('./one.js')
    console.log(a, b, 11);
  }
)