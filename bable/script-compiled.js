"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function combination(list) {
    return list.reduce(function (result, subList) {
        return subList.reduce(function (subResult, item) {
            var tail = result.length ? result.map(function (l) {
                return [].concat(_toConsumableArray(l), [item]);
            }) : [[item]];
            return subResult.concat(tail);
        }, []);
    }, []);
}
