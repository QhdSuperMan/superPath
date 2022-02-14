/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-10 11:36:28
 * @LastEditTime: 2022-02-11 15:12:28
 * @info: 描述
 */
const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.jianshu.com/p/f60e14db0b4e').then((data) => {
	const $ = cheerio.load(data.data)
	var a = $('#__next')
	console.log($('#__next'));
})