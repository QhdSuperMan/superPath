require('shelljs/global');


function gitAction() {
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
  })
}
