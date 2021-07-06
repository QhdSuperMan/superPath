/*
 * @Author: your name
 * @Date: 2021-06-30 21:31:17
 * @LastEditTime: 2021-06-30 21:32:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\别名\type.ts
 */
//! 接口 vs. 类型别名
// 其一，接口创建了一个新的名字，可以在其它任何地方使用。 
// 类型别名并不创建新名字—比如，错误信息就不会使用别名。 
// 在下面的示例代码里，在编译器中将鼠标悬停在 interfaced上，显示它返回的是 Interface，
// 但悬停在 aliased上时，显示的却是对象字面量类型。
// 另一个重要区别是类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）。 
// 因为 软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，
// 你应该尽量去使用接口代替类型别名。
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;