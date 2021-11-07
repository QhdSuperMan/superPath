const Koa = require('koa');
const app = new Koa();
const path = require('path')
const Router = require('koa-router');
const fs = require('fs')
const router = new Router()
const staticFiles = require('koa-static')
router.get('/index.manifest', async (ctx) => {
  const htmlContent = await fs.readFileSync('./index.manifest');
  ctx.set('Content-Type', 'mime-type')
  ctx.body = htmlContent;

});
// router.get('/test.js', async (ctx) => {
//   const htmlContent = await fs.readFileSync('./index.manifest');
//   ctx.body = htmlContent;
// });
app.use(staticFiles(path.join(__dirname + '/public/')))
app.use(router.routes())
app.listen(3000);