/*
 * @Author: your name
 * @Date: 2021-07-29 22:33:09
 * @LastEditTime: 2021-07-29 23:48:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\egg\egg-example\app\controller\news.js
 */
// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    // const newsList = await ctx.service.new.list(page);
    var newsList = [
      {
        url: 'haha',
        title: '哈哈',
        time: 1627709793
      },
      {
        url: 'heihei',
        title: '嘿嘿',
        time: 1627709793
      },
      {
        url: 'xixi',
        title: '嘻嘻',
        time: 1627709793
      }
    ]
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;