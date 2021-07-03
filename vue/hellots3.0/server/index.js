/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-03 17:53:56
 * @LastEditTime: 2021-06-22 15:29:41
 * @info: 描述
 */
// nodemon upgrade
const express = require('express')
const app = new express()
global.$app = app

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("Access-Control-Allow-Credentials", "true");
  // res.header("X-Powered-By", ' 3.2.1')
  next()
});

require('./start/start.js')
var user = require('./user/index.js')
app.use(user)
// app.use(function (req, res, next) {
//   var responseText = 'Hello World!<br>'
//   responseText += '<small>Requested at: ' + req.requestTime  + '</small>'
//   res.send(responseText)
// });
app.use(function (err, req, res, next) {
  console.log('报错')
  res.status(500)
  res.send('error', { error: err })
});


const host = 8888
console.log('您的服务器运行在' + host)
app.listen(host)