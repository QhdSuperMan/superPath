

/**
 *  对象类型接口
 */
interface SquareConfig {
  color: string;
  width?: number;
  [every: string]: any; // 不确定字段名字
}
// 校验接口
function createSquare(config: SquareConfig): { color: string; area: number, [propName: string]: any } {
  return { color: 'sss', area: 1, a: 1 }
}
// 可传空, 只要传的key不是color width之一就会报错
// createSquare({});
// 通过类型断言绕过校验
// createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// createSquare({a:1,b:1 ,color: "1"});



/**
 *  函数类型接口
 */
// 函数检验接口不校验参数名字，但是校验参数个数
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src: string, r: string): boolean {
  let result = src.search(r);
  return result > -1;
}

/**
  可索引的类型
 */
// 数组接口  字符串和数字
// 数字为数组
interface StringArray {
  [every: number]: any;
}

let myArray: StringArray;
myArray = ["Bob", 1];


class Animal {
  name: string;
}
class Dog {
  breed: number;
}
// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: string]: Animal
  // [x: string]: Dog;
}


