/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-16 16:54:57
 * @LastEditTime: 2021-03-18 18:09:33
 * @info: 描述
 */
require('shelljs/global');
console.log(111)
exec('git add .', function (status, output) {
  console.log('添加代码到版本控制')
  exec('git commit -m "自动测试"', function (status, output) {
    console.log('提交到本地缓存区')
    exec('git pull origin master', function (status, output) {
      console.log('拉代码')
      exec('git push origin master', function (status, output) {
        console.log('推代码')
      });
    });
  });
}, () => {
  console.log('报错了')
})
