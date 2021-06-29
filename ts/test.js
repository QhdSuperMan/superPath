/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2020-12-22 15:07:22
 * @LastEditTime: 2021-06-23 15:39:53
 * @info: 描述
 */
// enum Status {
//   Draft,
//   Published
// }
// 也可指定值
var Status;
(function (Status) {
    Status[Status["Draft"] = 0] = "Draft";
    Status[Status["Published"] = 1] = "Published";
})(Status || (Status = {}));
var str = 'Draft';
var a = Status[str];
console.log(a, Status)