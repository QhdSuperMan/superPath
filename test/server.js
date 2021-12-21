/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-10-31 16:01:36
 * @LastEditTime: 2021-11-19 11:52:40
 * @info: 描述
 */
const Koa = require('koa');
const app = new Koa();
const path = require('path')
const Router = require('koa-router');
const fs = require('fs')
const router = new Router()
const staticFiles = require('koa-static')
const { historyApiFallback  } = require('koa2-connect-history-api-fallback');
router.get('/index.manifest', async (ctx) => {
  const htmlContent = await fs.readFileSync('./index.manifest');
  ctx.set('Content-Type', 'mime-type')
  ctx.body = htmlContent;

});
// router.get('/test.js', async (ctx) => {
//   const htmlContent = await fs.readFileSync('./index.manifest');
//   ctx.body = htmlContent;
// });
app.use(historyApiFallback())
app.use(staticFiles(path.join(__dirname + '/public/')))
app.use(router.routes())
app.listen(3000);