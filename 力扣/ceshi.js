/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-02-20 11:41:45
 * @LastEditTime: 2021-02-20 13:55:15
 * @info: 描述
 */
buy[1][1] = Math.max(buy[0][1], sell[0][1] - price[1])
sell[1][1] = Math.max(sell[0][1], buy[0][0] + price[1])