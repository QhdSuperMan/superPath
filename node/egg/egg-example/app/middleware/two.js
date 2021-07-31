module.exports = (options, app) => {
  return async function robotMiddleware (ctx, next) {
    console.log('two中间件')
    await next()
  }
};
