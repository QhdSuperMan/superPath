/*
 * @Author: your name
 * @Date: 2021-07-27 20:08:32
 * @LastEditTime: 2021-08-01 23:30:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\egg\egg-example\app\controller\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    ctx.coreLogger.debug(22222222);
    ctx.coreLogger.info(22222222);
    ctx.coreLogger.warn(22222222);
  }
}

module.exports = HomeController;
