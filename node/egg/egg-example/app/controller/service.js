const Controller = require('egg').Controller;

class server extends Controller {
  async init () {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find();
    const a = await ctx.service.user.findTwo();
    ctx.body = '哈哈'
  }
}

module.exports = server;