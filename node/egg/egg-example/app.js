const path = require('path');

module.exports = app => {
  // 加载所有的校验规则
  const directory = path.join(app.config.baseDir, 'app/validate');
  app.loader.loadToApp(directory, 'validate');
  // app.beforeStart(async () => {
  //   // 保证应用启动监听端口前数据已经准备好了
  //   // 后续数据的更新由定时任务自动触发
  //   await app.runSchedule('update_cache');
  // });
  app.logger.info('app启动');
  app.coreLogger.info('插件启动');
};
