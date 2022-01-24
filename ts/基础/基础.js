var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 *  基本类型
 */
// 数组
var list = [1, 2, 3];
var two = [1, 2, 3];
var x;
// Initialize it
x = ['hello', 10]; // OK x[3] = 5 联合类型不能这样用
two[5] = 1;
list[4] = 1;
// any类型数组
var anyList = [1, true, "free"];
anyList[1] = 100;
console.log('any数组:' + anyList);
var anyObject = { 1: 4, 4: 5 };
console.log('any基本类型', anyObject);
// 只读数组
var onlyArray = [1, 4, 5, 6, 5];
// 枚举
var color;
(function (color) {
    color["red"] = "a";
    color["green"] = "b";
    color["blue"] = "c";
})(color || (color = {}));
var c = color.green;
var d = color['0'];
var e = color['a'];
console.log('枚举:' + c, d, color);
// Void undefined null never 
var unusable = undefined; // 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：通常用作函数返回值
var undef = undefined; //可能是数字用多类型
var nul = null;
undef = '1';
var neve;
// object  object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
function create(o) { }
;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// 类型断言
var someValue = { a: [1, 2] };
var strLength = someValue['a'][6];
console.log('类型断言：' + strLength);
// 解构赋值
var _a = { a: '4', b: 1 }, a = _a.a, b = _a.b;
console.log('解构赋值：' + a, b);
// 展开符号
var first = [1, 2];
var second = ['1', '2'];
var third = __spreadArray([], second, true);
