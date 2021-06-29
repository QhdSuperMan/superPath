/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2020-12-22 15:07:22
 * @LastEditTime: 2021-06-23 15:36:44
 * @info: 描述
 */
// enum Status {
//   Draft,
//   Published
// }

// 也可指定值
enum Status {
  Draft,
  Published
}
const str = 'Draft';
const a: Status = Status[str];