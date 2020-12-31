const ws = require('nodejs-websocket');
var time = 0
var server = ws
  .createServer(function (conn) {
    console.log('New connection')
    // conn.on('binary', function (inStream) {
    //   // 创建空的buffer对象，收集二进制数据
    //   var data = new Buffer(0)
    //   // 读取二进制数据的内容并且添加到buffer中
    //   inStream.on('readable', function () {
    //     var newData = inStream.read()
    //     if (newData)
    //       data = Buffer.concat([data, newData], data.length + newData.length)
    //   })
    //   inStream.on('end', function () {
    //     // 读取完成二进制数据后，处理二进制数据
    //     process_my_data(data)
    //   })
    // })
    conn.on('open', function (code, reason) {
      console.log('连接成功')
      conn.sendText("11")
    })
    conn.on('error', function (code, reason) {
      console.log('连接成功')
    })
    conn.on('close', function (code, reason) {
      console.log('连接失败')
    })
    conn.on('text', function (result) {
      console.log(time++)
      console.log(result)
      if (result === '你还活着吗') {
        conn.sendText("活的有滋有味")
      }
    })
  })
  .listen(8888)
console.log('sockte服务再8888端口启动')