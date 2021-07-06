/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-06 10:17:51
 * @LastEditTime: 2021-07-06 10:38:53
 * @info: 描述
 */
const createApp = require("./app.js");

module.exports = (context) => {
  return new Promise(async (reslove, reject) => {
    let { url } = context;
    let { app, router } = createApp({
      propsData: 'this is a data from props!'
    });
    router.push(url);
    //  router回调函数
    //  当所有异步请求完成之后就会触发
    router.onReady(() => {
      let matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject();
      }
      reslove(app);
    }, reject)
  })
}