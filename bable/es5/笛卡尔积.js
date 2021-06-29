"use strict";

/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-05-25 19:08:50
 * @LastEditTime: 2021-05-25 19:35:21
 * @info: 描述
 */
function cartesian(arr) {
    if (arr.length < 2) return arr[0] || [];
    return [].reduce.call(arr, function (col, set) {
        var res = [];
        col.forEach(function (c) {
            set.forEach(function (s) {
                var t = [].concat(Array.isArray(c) ? c : [c]);
                t.push(s);
                res.push(t);
            });
        });
        return res;
    });
}