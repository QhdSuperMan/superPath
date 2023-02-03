/*
 * @Author: 吴玉荣
 * @LastEditors: wuyurong 1065229722@qq.com
 * @Date: 2021-03-16 16:54:57
 * @LastEditTime: 2023-01-31 11:32:54
 * @info: 描述
 */
const shelljs =  require('shelljs');
shelljs.exec('git add .', function (status, output) {
  console.log('添加代码到版本控制完成')
  shelljs.exec('git commit -m "自动测试" --no-verify', function (status, output) {
    console.log('提交到本地缓存区完成')
    shelljs.exec('git pull origin master', function (status, output) {
      console.log('拉代码完成')
      shelljs.exec('git push origin master', function (status, output) {
        console.log('推代码完成')
      });
    });
  });
}, () => {
  console.log('报错了')
})