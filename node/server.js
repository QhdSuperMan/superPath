const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')()
// const buff = require('./fs.js')

router.get('/', function (ctx) {
  console.log(111);
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
})
app.use(router.routes());
app.use(router.allowedMethods({
  // throw: true, // 抛出错误，代替设置响应头状态
  // notImplemented: () => '不支持当前请求所需要的功能',
  // methodNotAllowed: () => '不支持的请求方式'
}));

app.use(require('koa-static')(__dirname + '/public'))

app.listen(3000)