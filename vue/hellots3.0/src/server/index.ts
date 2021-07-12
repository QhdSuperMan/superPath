/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-04-09 11:32:40
 * @LastEditTime: 2021-04-09 11:34:04
 * @info: 描述
 */

import server from './server'

export default function inItAxios(app: any) {
  app.config.globalProperties.$axios = server
}