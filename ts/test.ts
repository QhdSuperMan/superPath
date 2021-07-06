namespace s {
    export interface Y {
        name: string
    }
    export class Z { }
}

// ... elsewhere ...
namespace s {
    export var Y: number;
    export namespace Z {
        export class C { }
    }
}
// type s = string;
var sss: s.Y

