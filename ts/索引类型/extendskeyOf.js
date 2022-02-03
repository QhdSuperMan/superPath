/*
 * @Author: your name
 * @Date: 2021-06-30 21:55:42
 * @LastEditTime: 2021-06-30 22:21:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\索引类型\extendskeyOf.ts
 */
// 索引类型
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(person, ['age']); // ok, string[]
// 得到 type Copy = { a: string, b: number, c: boolean };
