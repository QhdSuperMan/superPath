const Controller = require('egg').Controller;
const path = require('path')
class server extends Controller {
  async init () {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find();
    // ctx.logger.debug('1111111111111111');
    // ctx.logger.info('2222222222222222222');
    // ctx.logger.warn('333333333333');
    // ctx.logger.error('444444444444');
    const a = await ctx.service.user.findTwo();
    ctx.body = '哈哈'
  }
  async render () {
    console.log('render')
    await this.ctx.render('index.js');
    // await this.ctx.render('index.js', {}, {
    //   templatePath: path.join(this.app.config.baseDir, 'app/view/template.html'),
    //   templateViewEngine: 'nunjucks',
    // });
  }

}

module.exports = server;