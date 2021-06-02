/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-24 16:41:00
 * @LastEditTime: 2021-04-09 16:55:59
 * @info: 描述
 */
const Mock = require('mockjs')
const express = require('express')
var router = express.Router();
router.post('/login', function (req, res, next) {
  var user = {
    usename: '超人'
  }
  res.send(JSON.stringify({ code: 200, data: user }))
})
router.get('/getNav', function (req, res, next) {
  var obj = [
    {
      name: '用户管理',
      comments: '/user',
      children: [
        {
          name: '用户新增',
          comments: '/user/userAdd'
        },
        {
          name: '用户列表',
          comments: '/user/userList'
        },
      ]
    },
    {
      name: '角色管理',
      comments: '/role',
      children: [
        {
          name: '角色新增',
          comments: '/role/roleAdd'
        },
        {
          name: '角色列表',
          comments: '/role/roleList'
        }
      ]
    },
  ]
  res.send(JSON.stringify({ code: 200, data: obj }))
})
module.exports = router