module.exports = (options, app) => {
  return async function robotMiddleware (ctx, next) {
    console.log('one中间件')
    await next()
  }
};

