/*
 * @Author: your name
 * @Date: 2021-07-27 20:08:32
 * @LastEditTime: 2021-07-29 23:51:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\egg\egg-example\config\config.default.js
 */
/* eslint valid-jsdoc: "off" */
'use strict';
const path = require('path')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1627387709816_5106';
  // add your middleware config here
  config.middleware = [];
  // 模板引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  // add your user config here
  const userConfig = {
    myAppName: 'egg',
    middleware: [
      'one',
      'two',
    ],
    view: {
      root: path.join(appInfo.baseDir, 'app/assets'),
      mapping: {
        '.js': 'assets',
      },
    },
    assets: {
      root: path.join(appInfo.baseDir, 'app/assets'),
      // templatePath: path.join(appInfo.baseDir, 'app/view/template.html'),
      templateViewEngine: 'nunjucks',
      devServer: {
        debug: false,
        command: 'roadhog dev',
        port: 8089,
        env: {
          BROWSER: 'none',
          ESLINT: 'none',
          SOCKET_SERVER: 'http://127.0.0.1:8000',
          PUBLIC_PATH: 'http://127.0.0.1:8000',
        },
      },
    },
    one: {
      id: [1, 2, 3]
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
