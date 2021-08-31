/*
 * @Author: your name
 * @Date: 2021-07-27 20:08:32
 * @LastEditTime: 2021-07-29 22:41:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \albb\node\egg\egg-example\config\plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
<<<<<<< HEAD
=======
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  assets: {
    enable: true,
    package: 'egg-view-assets',
  }
>>>>>>> bbbddd6a89bb6798b3dd368969074194b9739a04
};
