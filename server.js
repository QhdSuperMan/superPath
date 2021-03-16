require('shelljs/global');


function gitAction() {
  exec('git add .', function (status, output) {
    exec('git commit -m "自动测试"', function (status, output) {
      exec('git pull origin master', function (status, output) {
        exec('git push origin master', function (status, output) {

        });
      });
    });
  })
}

gitAction()
setInterval(() => {
  gitAction()
}, 86400000)