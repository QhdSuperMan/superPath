/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-06-30 16:49:19
 * @LastEditTime: 2021-06-30 16:49:20
 * @info: 描述
 */
function extend(first, second) {
    var result = {};
    result["id"] = first;
    result["two"] = second;
    return result;
}
extend(1, 2);
