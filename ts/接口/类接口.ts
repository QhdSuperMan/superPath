/**
 * 接口继承
 */
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength?: number;
}

let squareDom :Square = {color: '1'};


/**
 * 类类型 类实现接口 校验动态
 */
interface classInter {
  current: Date,
  say(d: Date):string;
}

class Clock implements classInter {
  current:Date = new Date()
  constructor () {
    this.say(this.current)
  }
  say (h:Date):string {
    return h.toString()
  }
}
console.log(new Clock())

// 校验静态
interface ClockConstructor {
    new (hour: number, minute: number);
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number) {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface{
    constructor(h: number, m: number) { }
    tick() {
      console.log("beep beep");
    }
}

let digital = createClock(DigitalClock, 12, 17);




