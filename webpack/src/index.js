/*
 * @Author: your name
 * @Date: 2021-07-13 22:07:42
 * @LastEditTime: 2021-07-13 23:02:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\webpack\src\index.js
 */
function getComponent() {
  return import('lodash')
}
getComponent().then(({ default: _ }) => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  document.body.appendChild(element);
});
