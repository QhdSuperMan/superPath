module.exports = (options, app) => {
  return async function robotMiddleware (ctx, next) {
    console.log('three中间件')
    await next()
  }
};
