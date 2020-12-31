const fs = require('fs');
// 从某个字符设备创建流。
const readable = fs.createReadStream('test.txt');
const writeable = fs.createWriteStream('test1.txt')
// readable.on('data', (chunk) => {
//   console.log(`接收到 ${chunk.length} 个字节的数据 22`);
//   writeable.write(chunk)
// });
writeable.on('pipe', (src) => {
  console.log(src)
});
readable.on('end', () => {
  console.log('已没有数据');
});
// readable.on('readable', function(a) {
//   // 有数据可读取。
//   let data;

//   while (data = this.read()) {
//     console.log(data);
//   }
// });
console.log('开始')
readable.pipe(writeable)
// readable.pause()