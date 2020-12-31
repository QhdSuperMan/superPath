/**
 *  基本类型
 */
// 数组
let list: number[] = [1, 2, 3];
let two: Array<number> = [1, 2, 3];
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK x[3] = 5 联合类型不能这样用
two[5]  = 1
list[4] = 1
// any类型数组
let anyList: any[] = [1, true, "free"];
anyList[1] = 100;
console.log('any数组:' + anyList)
let anyObject:any = {1:4,4:5}
console.log('any基本类型',anyObject)
// 只读数组
var onlyArray:ReadonlyArray<number> = [1,4,5,6,5]

// 枚举
enum color { red = 'a',green = 'b',blue = 'c' }
let c:color = color.green
let d:color = color['0']
let e:color = color['a']
console.log('枚举:' + c,d, color)


// Void undefined null never 
let unusable: void = undefined; // 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：通常用作函数返回值
let undef: undefined | string = undefined ; //可能是数字用多类型
let nul: null = null;
undef = '1'
let neve: never;


// object  object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
function create(o: object | null): void {};
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error


// 类型断言
let someValue: any = { a: [1,2]};
let strLength: number = (someValue as string)['a'][6];
console.log('类型断言：' + strLength)

// 解构赋值
let {a, b}: {a: string, b: number} = {a: '4', b: 1};
console.log('解构赋值：'+ a, b)
// 展开符号
let first:number[] = [1,2]
let second:string[] = ['1','2']
let third:string[] = [...second]