/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-06 14:15:40
 * @LastEditTime: 2022-02-11 14:50:38
 * @info: 描述
 */
var Status;
(function (Status) {
    Status[Status["Draft"] = 10] = "Draft";
    Status[Status["ssss"] = 20] = "ssss";
    Status[Status["Published"] = 21] = "Published";
})(Status || (Status = {}));
console.log(Status);
console.log(Status.Draft);
console.log(Status.Published);
