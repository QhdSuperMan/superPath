module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    await next();
  };
};
