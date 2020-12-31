const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')()
const buff = require('./fs.js')

router.get('/string', async (ctx, next) => {
  // buff('test.mp3',ctx)
  ctx.body = 'koa2 string'
})
app.use(require('koa-static')(__dirname + '/public'))
app.use(router.routes(), router.allowedMethods())
app.listen(3000)