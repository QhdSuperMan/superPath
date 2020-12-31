const Koa = require('koa');
const router = require('koa-router')(); //注意：引入的方式
const app = new Koa();
router.get('/', function (ctx, next) {
  ctx.body = "Hello koa";
})
router.get('/news', (ctx, next) => {
  ctx.body = "新闻page"
});
app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods());
/* 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配
router.routes()之后,目的在于：根据ctx.status 设置response 响应头
*/
app.listen(3000, () => {
  console.log('starting at port 3000');
});