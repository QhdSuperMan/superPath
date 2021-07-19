/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-13 17:10:59
 * @LastEditTime: 2021-07-13 17:14:00
 * @info: 描述
 */
const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Access-Control-Allow-Origin': '*'
  })
  let i = 0;
  const timer = setInterval(() => {
    const date = { date: new Date() }
    var content = 'event: ping\n' + "data:" + JSON.stringify(date) + "" + "\n\n";
    res.write(content);
  }, 1000)

  res.connection.on("close", function () {
    res.end();
    clearInterval(timer);
    console.log("Client closed connection. Aborting.");
  });

}).listen(3000)
console.log('server is run http://localhost:3000');