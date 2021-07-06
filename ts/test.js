/*
 * @Author: your name
 * @Date: 2021-07-01 22:20:47
 * @LastEditTime: 2021-07-01 22:53:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\test.js
 */
namespace s {
    export interface Y { }
    export class Z { }
}

// ... elsewhere ...
namespace s {
    export var Y: number;
    export namespace Z {
        export class C { }
    }
}
type s = string;
