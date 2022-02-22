/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-02-11 14:57:01
 * @LastEditTime: 2022-02-11 14:57:15
 * @info: 描述
 */
var debug = require('debug')('http'); //引入debug模块并创建debug实例
var http = require('http'); //引入http模块用于构造http服务器
var name = 'My App';

debug('booting %o', name); //调用debug输出(printf风格输出--详见util.inspect及console模块)
http.createServer(function(req, res){ //创建服务器
	debug(req.method + ' ' + req.url); //收到请求时打印http方法及url
	res.end('hello\n');
}).listen(3000, function(){
	debug('listening'); //开启服务器监听时打印listening
});
