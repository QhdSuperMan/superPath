/*
 * @Author: your name
 * @Date: 2021-08-01 21:51:46
 * @LastEditTime: 2021-08-01 22:59:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \egg-example\app\service\user.js
 */
const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    console.log('find');
    const user = { id: 1 };
    return user;
  }
  async findTwo() {
    console.log('findTwo');
    const user = { id: 1 };
    return user;
  }
}

module.exports = UserService;
