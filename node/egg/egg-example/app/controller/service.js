/*
 * @Author: your name
 * @Date: 2021-08-01 21:51:46
 * @LastEditTime: 2021-08-01 22:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\egg\egg-example\app\controller\service.js
 */
const Controller = require('egg').Controller;

class server extends Controller {
  async init() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find();
    const a = await ctx.service.user.findTwo();

    ctx.body = '哈哈61';
  }
}

module.exports = server;
