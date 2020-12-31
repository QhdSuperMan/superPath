var squareDom = { color: '1' };
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
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var digital = createClock(DigitalClock, 12, 17);
