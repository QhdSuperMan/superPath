const Service = require('egg').Service;

class UserService extends Service {
  async find (uid) {
    console.log('find')
    const user = { id: 1 }
    return user;
  }
  async findTwo (uid) {
    console.log('findTwo')
    const user = { id: 1 }
    return user;
  }
}

module.exports = UserService;