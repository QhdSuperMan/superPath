<<<<<<< HEAD
const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
var a = 4  & ShapeFlags.STATEFUL_COMPONENT
var b: ShapeFlags = ShapeFlags.STATEFUL_COMPONENT
=======
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

>>>>>>> 1e5f194eee01c4d94c30e7e5e77cc0b0ebe173fd
