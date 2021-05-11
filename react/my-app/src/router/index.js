/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-05-11 10:40:23
 * @LastEditTime: 2021-05-11 16:34:18
 * @info: 路由
 */
import about from '../page/about'
import info from '../page/info'


const routers = [
  {
    path: 'info',
    comments: info
  },
  {
    path: 'about',
    comments: about
  }
]

export default routers