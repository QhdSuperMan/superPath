/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-03 17:59:26
 * @LastEditTime: 2021-03-03 18:17:21
 * @info: 描述
 */
const Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
global.$app.get('/',(request,Response)=> {
    console.log('/')
})
global.$app.get('/get',(request,Response)=> {
    console.log('get')
})