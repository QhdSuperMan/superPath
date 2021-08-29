/*
 * @Author: your name
 * @Date: 2021-07-27 20:08:32
 * @LastEditTime: 2021-07-29 22:53:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\egg\egg-example\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  const three = app.middleware.three();
  app.router.get('/news', controller.news.list);
  app.router.post('/form/post', controller.news.form);
  app.router.get('/service', controller.service.init);
  // app.router.get('/news/:id', three, controller.news.list);
  // router.get('/news', controller.news.list);
};
