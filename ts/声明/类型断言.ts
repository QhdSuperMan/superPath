/*
 * @Author: your name
 * @Date: 2021-07-01 21:04:44
 * @LastEditTime: 2021-07-01 21:05:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\声明\类型断言.ts
 */


type foo = string
var bar = '111'
var two = <foo>bar;
var three = bar as foo