// 混合类型核
var Foo = /** @class */ (function () {
    function Foo() {
        this.demo = '';
        return this;
    }
    Foo.prototype.add = function (a) {
        return a;
    };
    return Foo;
}());
var b = new Foo(a);
var a = new Foo(b);
