/*
 * @Author: your name
 * @Date: 2021-07-27 20:08:32
 * @LastEditTime: 2021-07-29 23:05:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\egg\egg-example\app\controller\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(11,ctx.status)
    ctx.body = 'hi, egg5665666';
  }
}

module.exports = HomeController;