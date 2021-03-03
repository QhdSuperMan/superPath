/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-03 17:53:56
 * @LastEditTime: 2021-03-03 18:14:37
 * @info: 描述
 */
// nodemon upgrade
const express = require('express')
const app = new express()
global.$app = app
require('./start/start.js')
const host = 8888
console.log('您的服务器运行在' + host)
app.listen(host)