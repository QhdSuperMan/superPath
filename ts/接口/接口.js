var Clock = /** @class */ (function () {
    function Clock() {
        this.current = new Date();
        this.say(this.current);
    }
    Clock.prototype.say = function (h) {
        return h.toString();
    };
    return Clock;
}());
console.log(new Clock());
// 校验接口
function createSquare(config) {
    return { color: 'sss', area: 1, a: 1 };
}
var mySearch;
mySearch = function (src, r) {
    var result = src.search(r);
    return result > -1;
};
var myArray;
myArray = ["Bob", 1];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
