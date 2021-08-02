/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-19 16:06:57
 * @LastEditTime: 2021-07-20 10:13:04
 * @info: 描述
 */
var axios = require('../index');

var URL = 'http://127.0.0.1:3000/api';
var BODY = {
  foo: 'bar',
  baz: 1234
};

function handleSuccess(data) { console.log(data); }
function handleFailure(data) { console.log('error', data); }

// GET
axios.get(URL, { params: BODY })
  .then(handleSuccess)
  .catch(handleFailure);

// POST
axios.post(URL, BODY)
  .then(handleSuccess)
  .catch(handleFailure);